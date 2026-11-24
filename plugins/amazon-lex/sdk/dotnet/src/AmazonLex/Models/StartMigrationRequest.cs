using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record StartMigrationRequest
{
    /// <summary>
    /// The name of the Amazon Lex V1 bot that you are migrating to Amazon Lex V2.
    /// </summary>
    [JsonPropertyName("v1BotName")]
    public required string V1BotName { get; init; }

    /// <summary>
    /// The version of the bot to migrate to Amazon Lex V2. You can migrate the $LATEST version as well as any numbered version.
    /// </summary>
    [JsonPropertyName("v1BotVersion")]
    public required string V1BotVersion { get; init; }

    /// <summary>
    /// The name of the Amazon Lex V2 bot that you are migrating the Amazon Lex V1 bot to. If the Amazon Lex V2 bot doesn't exist, you must use the CREATE_NEW migration strategy. If the Amazon Lex V2 bot exists, you must use the UPDATE_EXISTING migration strategy to change the contents of the Amazon Lex V2 bot.
    /// </summary>
    [JsonPropertyName("v2BotName")]
    public required string V2BotName { get; init; }

    /// <summary>
    /// The IAM role that Amazon Lex uses to run the Amazon Lex V2 bot.
    /// </summary>
    [JsonPropertyName("v2BotRole")]
    public required string V2BotRole { get; init; }

    /// <summary>
    /// The strategy used to conduct the migration. CREATE_NEW - Creates a new Amazon Lex V2 bot and migrates the Amazon Lex V1 bot to the new bot. UPDATE_EXISTING - Overwrites the existing Amazon Lex V2 bot metadata and the locale being migrated. It doesn't change any other locales in the Amazon Lex V2 bot. If the locale doesn't exist, a new locale is created in the Amazon Lex V2 bot.
    /// </summary>
    [JsonPropertyName("migrationStrategy")]
    public required MigrationStrategy MigrationStrategy { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
