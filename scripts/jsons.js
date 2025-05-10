let newQuestions = [
    [
        {
            "question": "Wer hat HTML erfunden?",
            "answer_1": "Robbie Williams",
            "answer_2": "Lady Gaga",
            "answer_3": "Tim Berners-Lee",
            "answer_4": "Justin Bieber",
            "right_answer": 3
        },
        {
            "question": "Was bedeutet das HTML Tag &lt;a&gt;?",
            "answer_1": "Text Fett",
            "answer_2": "Container",
            "answer_3": "Ein Link",
            "answer_4": "Kursiv",
            "right_answer": 3
        },
        {
            "question": "Wie bindet man eine Website in eine Website ein?",
            "answer_1": "&lt;iframe&gt;, &lt;frame&gt;, and &lt;frameset&gt;",
            "answer_2": "&lt;iframe&gt;",
            "answer_3": "&lt;frame&gt;",
            "answer_4": "&lt;frameset&gt;",
            "right_answer": 2
        },
        {
            "question": "Welches Tag wird verwendet, um eine Überschrift in HTML darzustellen?",
            "answer_1": "&lt;head&gt;",
            "answer_2": "&lt;title&gt;",
            "answer_3": "&lt;h1&gt;",
            "answer_4": "&lt;header&gt;",
            "right_answer": 3
        }
    ],
    [
        {
            "question": "Wofür steht CSS?",
            "answer_1": "Cascading Style Sheets",
            "answer_2": "Computer Style Sheets",
            "answer_3": "Creative Style Sheets",
            "answer_4": "Colorful Style Sheets",
            "right_answer": 1
        },
        {
            "question": "Wie ändert man die Textfarbe in CSS?",
            "answer_1": "color: blue;",
            "answer_2": "text-color: blue;",
            "answer_3": "font-color: blue;",
            "answer_4": "text-style: blue;",
            "right_answer": 1
        },
        {
            "question": "Welches Attribut wird verwendet, um ein externes Stylesheet einzubinden?",
            "answer_1": "src",
            "answer_2": "href",
            "answer_3": "link",
            "answer_4": "style",
            "right_answer": 2
        },
        {
            "question": "Welcher CSS-Selektor wählt alle &lt;p&gt;-Elemente aus?",
            "answer_1": "p {}",
            "answer_2": ".p {}",
            "answer_3": "#p {}",
            "answer_4": "* {}",
            "right_answer": 1
        },
        {
            "question": "Wie definiert man die Schriftgröße in CSS?",
            "answer_1": "text-size",
            "answer_2": "font-size",
            "answer_3": "text-style",
            "answer_4": "font-weight",
            "right_answer": 2
        },
        {
            "question": "Wie kann man ein Hintergrundbild in CSS hinzufügen?",
            "answer_1": "background-image: url('image.jpg');",
            "answer_2": "background: image('image.jpg');",
            "answer_3": "img: url('image.jpg');",
            "answer_4": "image-background: url('image.jpg');",
            "right_answer": 1
        },
        {
            "question": "Wie erstellt man abgerundete Ecken in CSS?",
            "answer_1": "corner-radius",
            "answer_2": "border-corner-radius",
            "answer_3": "border-radius",
            "answer_4": "round-corner",
            "right_answer": 3
        },
        {
            "question": "Welcher CSS-Selektor wählt ein Element mit der ID 'main' aus?",
            "answer_1": ".main",
            "answer_2": "*main",
            "answer_3": "#main",
            "answer_4": "main",
            "right_answer": 3
        },
        {
            "question": "Welcher CSS-Selektor wählt alle Elemente mit der Klasse 'active' aus?",
            "answer_1": "#active",
            "answer_2": ".active",
            "answer_3": "*active",
            "answer_4": "active",
            "right_answer": 2
        },
        {
            "question": "Wie kann man die Schriftart in CSS ändern?",
            "answer_1": "text-font",
            "answer_2": "font-family",
            "answer_3": "font-type",
            "answer_4": "text-style",
            "right_answer": 2
        }
    ],
    [
        {
            "question": "Wofür steht die Abkürzung JS?",
            "answer_1": "Java Syntax",
            "answer_2": "Java Source",
            "answer_3": "JavaScript",
            "answer_4": "Just Script",
            "right_answer": 3
        },
        {
            "question": "Wie definiert man eine Variable in JavaScript?",
            "answer_1": "var myVar;",
            "answer_2": "variable myVar;",
            "answer_3": "let myVar;",
            "answer_4": "const myVar;",
            "right_answer": 1
        },
        {
            "question": "Wie schreibt man eine Funktion in JavaScript?",
            "answer_1": "def myFunction() {}",
            "answer_2": "function myFunction() {}",
            "answer_3": "func myFunction() {}",
            "answer_4": "fn myFunction() {}",
            "right_answer": 2
        },
        {
            "question": "Wie zeigt man in JavaScript eine Nachricht im Browser an?",
            "answer_1": "console.write()",
            "answer_2": "document.write()",
            "answer_3": "alert()",
            "answer_4": "message()",
            "right_answer": 3
        },
        {
            "question": "Welcher Vergleichsoperator wird verwendet, um die Gleichheit von Wert und Typ zu prüfen?",
            "answer_1": "==",
            "answer_2": "=",
            "answer_3": "===",
            "answer_4": "!==",
            "right_answer": 3
        },
        {
            "question": "Wie fügt man einen Kommentar in JavaScript ein?",
            "answer_1": "# Das ist ein Kommentar",
            "answer_2": "// Das ist ein Kommentar",
            "answer_3": "/* Das ist ein Kommentar */",
            "answer_4": "-- Das ist ein Kommentar",
            "right_answer": 2
        },
        {
            "question": "Wie erstellt man ein Array in JavaScript?",
            "answer_1": "var arr = []",
            "answer_2": "array arr = {}",
            "answer_3": "arr = ()",
            "answer_4": "arr = new Array[]",
            "right_answer": 1
        },
        {
            "question": "Welcher Befehl stoppt die Ausführung einer Schleife in JavaScript?",
            "answer_1": "exit",
            "answer_2": "stop",
            "answer_3": "return",
            "answer_4": "break",
            "right_answer": 4
        },
        {
            "question": "Wie prüft man, ob eine Variable nicht definiert ist?",
            "answer_1": "if (myVar == undefined)",
            "answer_2": "if (myVar = undefined)",
            "answer_3": "if (myVar != defined)",
            "answer_4": "if (myVar === null)",
            "right_answer": 1
        },
        {
            "question": "Wie konvertiert man eine Zahl in einen String in JavaScript?",
            "answer_1": "String(123)",
            "answer_2": "toString(123)",
            "answer_3": "convertToString(123)",
            "answer_4": "numToStr(123)",
            "right_answer": 1
        }
    ],
    [
        {
            "question": "Wer hat die Programmiersprache Java entwickelt?",
            "answer_1": "Brendan Eich",
            "answer_2": "James Gosling",
            "answer_3": "Guido van Rossum",
            "answer_4": "Bjarne Stroustrup",
            "right_answer": 2
        },
        {
            "question": "Welches Schlüsselwort wird verwendet, um eine Klasse in Java zu definieren?",
            "answer_1": "define",
            "answer_2": "class",
            "answer_3": "object",
            "answer_4": "struct",
            "right_answer": 2
        },
        {
            "question": "Wie erstellt man eine Instanz einer Klasse in Java?",
            "answer_1": "new MyClass();",
            "answer_2": "create MyClass();",
            "answer_3": "instantiate MyClass();",
            "answer_4": "MyClass();",
            "right_answer": 1
        },
        {
            "question": "Welches Schlüsselwort wird verwendet, um eine Methode in einer Klasse zu definieren?",
            "answer_1": "method",
            "answer_2": "function",
            "answer_3": "define",
            "answer_4": "void",
            "right_answer": 4
        },
        {
            "question": "Wie gibt man einen Text in der Konsole in Java aus?",
            "answer_1": "console.log();",
            "answer_2": "echo();",
            "answer_3": "System.out.println();",
            "answer_4": "print();",
            "right_answer": 3
        },
        {
            "question": "Welches Schlüsselwort wird verwendet, um eine Klasse von einer anderen zu erben?",
            "answer_1": "inherits",
            "answer_2": "extends",
            "answer_3": "implements",
            "answer_4": "inheritsFrom",
            "right_answer": 2
        },
        {
            "question": "Welches Schlüsselwort wird verwendet, um eine Schnittstelle in Java zu definieren?",
            "answer_1": "interface",
            "answer_2": "abstract",
            "answer_3": "class",
            "answer_4": "struct",
            "right_answer": 1
        },
        {
            "question": "Wie startet man ein Java-Programm?",
            "answer_1": "main()",
            "answer_2": "start()",
            "answer_3": "run()",
            "answer_4": "execute()",
            "right_answer": 1
        },
        {
            "question": "Welches Schlüsselwort wird verwendet, um eine Exception abzufangen?",
            "answer_1": "catch",
            "answer_2": "handle",
            "answer_3": "exception",
            "answer_4": "throw",
            "right_answer": 1
        },
        {
            "question": "Wie kann man in Java eine konstante Variable definieren?",
            "answer_1": "let",
            "answer_2": "const",
            "answer_3": "final",
            "answer_4": "constant",
            "right_answer": 3
        }
    ]
];