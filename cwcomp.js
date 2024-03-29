      $(document).ready(function () {
        $("#mozart").click(create_menus);

        //  ===========================================================
        //  create_help_menu: Creates the "help" menu
        //  ===========================================================

        function create_help_menu() {
          $("#menubar").append(
            '<a class="w3-bar-item w3-button w3-right" href="https://github.com/philhanna/crossword/wiki">Help</a>'
          );
        }

        //==============================================================
        //  create_menu: Creates a menu on the menu bar.
        //
        //  Parameters: mnu - a JSON object described below
        //
        //  mnu is a JSON object consisting of:
        //
        //      "name"      the menu label
        //      "items"     an array of mnuItem objects for this menu
        //
        //  mnuItem is a JSON object consisting of:
        //
        //      "id"        the ID of the menu item
        //      "label"     the menu item name
        //      "enabled"   true or false
        //==============================================================

        function create_menu(mnu) {

          let name = mnu.name;
          let items = mnu.items;

          // Create the menu element (elem)
          let elem = document.createElement("div");
          elem.setAttribute("class", "w3-dropdown-hover w3-blue-gray");

          // Create the menu name button (elemButton)
          let elemButton = document.createElement("button");          
          elemButton.setAttribute("id", `btn${name}`);
          elemButton.setAttribute("class", "w3-button");

          // Create the text of the menu name button (text)
          let text = document.createTextNode(`${name}`);
          elemButton.appendChild(text);
          elem.appendChild(elemButton);

          // Create the dropdown menu div
          let elemDrop = document.createElement("div");
          elemDrop.setAttribute("id", `drop${name}`);
          elemDrop.setAttribute(
            "class",
            "w3-dropdown-content w3-bar-block w3-card-4"
          );
          elem.appendChild(elemDrop);

          // Add the menu items

          for (var i = 0; i < items.length; i++) {
            let mnuItem = items[i];
            let elem = create_menu_item(mnuItem);
            elemDrop.appendChild(elem);
          }

          return elem;
        }

        //==============================================================
        //  create_menu_item: Creates a single menu item.
        //
        //  Parameters: mnuItem - a JSON object described below
        //
        //  mnuItem is a JSON object consisting of:
        //
        //      "id"        the ID of the menu item
        //      "label"     the menu item name
        //      "enabled"   true or false
        //==============================================================

        function create_menu_item(mnuItem) {
          let id = mnuItem.id;
          let label = mnuItem.label;
          let enabled = mnuItem.enabled;

          let elem = document.createElement("a");
          elem.setAttribute("id", id);
          var classNames = "w3-bar-item w3-button";
          if (enabled == false) {
            classNames += " w3-disabled";
          }
          elem.setAttribute("class", classNames);

          let text = document.createTextNode(label);
          elem.appendChild(text);

          return elem;
        }

        //==============================================================
        //  create_menus: Creates the menus from the menu.json object
        //==============================================================

        function create_menus() {

          // Everything but the "help" menu
          $.getJSON("menu.json", function (data) {
            let root = data["menudata"];
            for (var i = 0; i < root.length; i++) {
              let mnu = root[i];
              let elemMnu = create_menu(mnu);
              $("#menubar").append(elemMnu);
            }
          });

          // The "help" menu
          create_help_menu();
        }
      });
