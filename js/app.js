// replace these values with those generated in your Video API account
var apiKey = "47714231";
var sessionId = "2_MX40NzcxNDIzMX5-MTY4NDIzODU3NDk1Nn5vZ0lwSVRlSzhOeEtTcXV5b2ExQUpLWnd-fn4";
var token = "T1==cGFydG5lcl9pZD00NzcxNDIzMSZzaWc9ZmI4YWRkNzg2MDVmMGE2N2QyNjliM2Y2YjdhNjJhYzVlZjNlNjY0MTpzZXNzaW9uX2lkPTJfTVg0ME56Y3hOREl6TVg1LU1UWTROREl6T0RVM05EazFObjV2WjBsd1NWUmxTemhPZUV0VGNYVjViMkV4UVVwTFduZC1mbjQmY3JlYXRlX3RpbWU9MTY4NDIzODYwOCZub25jZT0wLjYzNDY3MTg2MzA0OTUyNDMmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTY4NjgzMDYwNyZjb25uZWN0aW9uX2RhdGE9aGVsbG8maW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0=";



// Handling all of our errors here by alerting them
function handleError(error) {
    if (error) {
      alert(error.message);
    }
  }

initializeSession();
  
  function initializeSession() {
    var session = OT.initSession(apiKey, sessionId);
  
    // Subscribe to a newly created stream
    session.on('streamCreated', function(event) {
        session.subscribe(event.stream, 'subscriber', {
          insertMode: 'append',
          width: '100%',
          height: '100%'
        }, handleError);
      });
      
    // Create a publisher
    var publisher = OT.initPublisher('publisher', {
      insertMode: 'append',
      width: '100%',
      height: '100%'
    }, handleError);
  
    // Connect to the session
    session.connect(token, function(error) {
      // If the connection is successful, publish to the session
      if (error) {
        handleError(error);
      } else {
        session.publish(publisher, handleError);
      }
    });
  }
  
  