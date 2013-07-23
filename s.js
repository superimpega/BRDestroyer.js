API.sendChat('/me Running Hue Kicker version 1.1')
    API.on (API.CHAT, function (data) {
      console.log(data);
             var a = data.message.toLowerCase();
              if (a.indexOf('hue') > -1)
              {
              	API.moderateKickUser(data.fromID, "spamming");
              }
              else if (a.indexOf('br') > -1)
              {
              	API.moderateKickUser(data.fromID, "spamming");
              }
              else if (a.indexOf('hu3') > -1)
              {
              	API.moderateKickUser(data.fromID, "spamming");
              }
              else if (a.indexOf('kkkkkkk') > -1)
              {
                API.moderateKickUser(data.fromID, "spamming");
              }
          })
