[GET] /user/<username>
Content-Type: "application/json"
PARAMS: None

RESPONSE:

[
    { id:"3694a48ec",  label: "Make the bed", done: false },
    { id:"c34b4dbb8b",  label: "Walk the dog", done: false },
    { id:"0611f8fdc",  label: "Do the replits", done: false}
]

[POST] /todos/user/<username>
Content-Type: "application/json"
BODY: []

RESPONSE:
{
    "result": "ok"
}

[PUT] /todos/user/<username>
Content-Type: "application/json"
BODY:
    [
        { label: "Make the bed", done: false },
        { label: "Walk the dog", done: false },
        { label: "Do the replits", done: false }
    ]

RESPONSE:
{
    "result": "A list with 3 todos was succesfully saved"
}

[DELETE] /todos/user/<username>
Content-Type: "application/json"
PARAMS: none

RESPONSE:

[ "result": "ok" ]