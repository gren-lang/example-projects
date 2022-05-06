# TodoMVC in Gren - [Try It!](https://roaring-maamoul-19ebb0.netlify.app/)

## This i a port of [Elm TodoMVC](https://github.com/evancz/elm-todomvc) to the Gren programming language

All of the Gren code lives in `src/Main.gren` and relies on the gren-lang/html library.

There also is a port handler set up in `index.html` to store the Gren application's state in `localStorage` on every update.

## Build Instructions

1. Run the following command from the root of this project:

```bash
gren make ./src/Main.gren --output=gren-todomvc.js
```

2. Create an index.html file and copy paste the following snippet into it:

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Gren • TodoMVC</title>
    <script type="text/javascript" src="gren-todomvc.js"></script>
    <link rel="stylesheet" href="style.css" />
  </head>

  <body></body>

  <script type="text/javascript">
    var storedState = localStorage.getItem('gren-todo-save');
    var startingState = storedState ? JSON.parse(storedState) : null;
    var app = Gren.Main.init({ flags: startingState });
    app.ports.setStorage.subscribe(function (state) {
      localStorage.setItem('gren-todo-save', JSON.stringify(state));
    });
  </script>
</html>
```

3. Then open `index.html` in your browser!
