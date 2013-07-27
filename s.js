API.sendChat('Running Chocolate Puppies version 1.0') 
    API.on (API.CHAT, function (data) { 
        console.log(data); 
             var a = data.message.toLowerCase(); 
              if (a.indexOf('huehuehue') > -1) 
              { 
                API.moderateKickUser(data.fromID, "spamming"); 
              } 
              else if (a.indexOf('brbrbr') > -1) 
              { 
                API.moderateKickUser(data.fromID, "spamming"); 
              } 
              else if (a.indexOf('hu3hu3hu3') > -1) 
              { 
                API.moderateKickUser(data.fromID, "spamming"); 
              } 
          }) 
