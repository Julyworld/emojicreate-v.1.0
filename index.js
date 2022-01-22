        if(!message.member.permissions.has("MANAGE_EMOJI")) return;
        if(!message.guild.me.permissions.has("MANAGE_EMOJI")) return;
        if(!message.guild.me.roles.highest.position) return;
        
        let emoji = message.content.slice(11)
        if(!emoji) return;
        const create = message.guild.emojis.create(`${emoji}`, `emoji`)
                                                       ∧          ∧
                                                  <emoji-URL> <emoji-Name>
