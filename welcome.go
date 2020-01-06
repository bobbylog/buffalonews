package main

//importing the log and http libraries into the project
import (
  "log"
  "net/http"
)

func main() {
  
  //Setting working directory to work
  fs := http.FileServer(http.Dir("work/buffalonews/work"))
  
  //creating a handler which responds to all HTTP requests with the contents of a given FileSystem
  http.Handle("/", fs)

  log.Println("Listening...")
  
  //Setting up server to listen on port 8000 and serve the static files over that port.
  http.ListenAndServe(":8000", nil)
}