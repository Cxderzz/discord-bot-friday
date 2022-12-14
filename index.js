// Require the necessary discord.js classes
const {
    Client,
    GatewayIntentBits,
    AttachmentBuilder,
    EmbedBuilder,
    ConnectionVisibility,
} = require("discord.js");
const { token } = require("./config.json");

// Create a new client instance
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

// When the client is ready, run this code (only once)
client.once("ready", () => {
    console.log("Ready!");
});

client.on("messageCreate", (message) => {
    if (
        message.content == "start here 123123" &&
        message.member.id !== "1024334740444172339"
    ) {
        setInterval(() => {
            const day = new Date().getUTCDay();
            if (day !== 5) return;
            const embedFriday = new EmbedBuilder()
                .setDescription("It's Friday In California.")
                .setTitle("Hey <@745191242970824735>!")
                .setColor("DarkPurple");
            const file = new AttachmentBuilder("./friday.mp4");
            message.channel.send({
                content: "<@745191242970824735> It's Friday Time.......",
                embeds: [embedFriday],
                files: [file],
            });
        }, 86400 * 1000);
    }
    //  // increment the variable
});

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const { commandName } = interaction;

    if (commandName === "friday") {
        const embedFriday = new EmbedBuilder()
            .setDescription("It's Friday In California.")
            .setTitle("Hey Liz!")
            .setColor("DarkPurple");
        const file = new AttachmentBuilder("./friday.mp4");
        await interaction.reply(
            "<@745191242970824735> It's Friday Time......."
        );
        const result = {
            embeds: [embedFriday],
            files: [file],
        };
        await interaction.editReply(result);
    }
});

// Login to Discord with your client's token
client.login(token);
