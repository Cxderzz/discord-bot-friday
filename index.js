// Require the necessary discord.js classes
const {
    Client,
    GatewayIntentBits,
    AttachmentBuilder,
    EmbedBuilder,
} = require("discord.js");
const { token } = require("./config.json");

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once("ready", () => {
    console.log("Ready!");
});

client.on("message", (message) => {
    var interval = setInterval(() => {
        message.channel
            .send("Hello") // increment the variable
            .catch(console.error); // add error handling here
    }, 1000);
});

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const { commandName } = interaction;

    if (commandName === "friday") {
        const embedFriday = new EmbedBuilder()
            .setDescription("It's Friday In California.")
            .setTitle("Hey!")
            .setColor("DarkPurple");
        const file = new AttachmentBuilder("./friday.mp4");
        await interaction.reply({
            embeds: [embedFriday],
            files: [file],
        });
    }
});

// Login to Discord with your client's token
client.login(token);
