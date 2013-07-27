API.sendChat('Running Project Chocolate Puppies version 1.2')
    API.on (API.CHAT, function (data) {
      console.log(data);
             var a = data.message.toLowerCase();
              if (a.indexOf('huehuehue') > -1)
              {
              	API.moderateKickUser(data.fromID, "Spamming hue");
              }
              else if (a.indexOf('brbrbr') > -1)
              {
              	API.moderateKickUser(data.fromID, "Spamming br");
              }
              else if (a.indexOf('hu3hu3') > -1)
              {
              	API.moderateKickUser(data.fromID, "Spamming hu3");
              }
              else if (a.indexOf('kkkkkkk') > -1)
              {
                API.moderateKickUser(data.fromID, "Spamming k");
              }
              else if (a.indexOf('zuera') > -1)
              {
                API.moderateKickUser(data.fromID, "Spamming zuera");
              {
              else if (a.indexOf('spoder mafia') > -1)
              {
                API.moderateKickUser(data.fromID, "Spamming spoder mafia");
              {
              else if (a.indexOf('gibe moni plox') > -1)
              {
                API.moderateKickUser(data.fromID, "Spamming");
          })
