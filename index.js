// describe("shout(string)", function () {
//    it("receives one argument and returns it in all caps", function () {
//      expect(shout("HELLO")).toEqual("HELLO");
//     });
//    });
  
  function shout(string) {
    return string.toUpperCase();
  }
  
  shout("HELLO");
  
// describe("whisper(string)", function () {
//     it("receives one argument and returns it in all lowercase", function () {
//       expect(whisper("HELLO")).toEqual("hello");
//     });
//   });
  
  function whisper(string) {
    return string.toLowerCase();
  }
  
  whisper("HELLO");
  function logShout(string) {
    console.log(string.toUpperCase());
  }
  
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  
  function sayHiToHeadphonedRoommate(string){
    if (string === string.toLowerCase()){;
    return "I can't hear you!";
  }else if (string === string.toUpperCase()) {
    return "YES INDEED!";
  }else if (string === "Let's have dinner together!") {
    return "I would love to!";
  }
}
  
  