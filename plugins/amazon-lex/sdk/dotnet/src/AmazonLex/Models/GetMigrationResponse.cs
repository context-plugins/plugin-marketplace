using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record GetMigrationResponse
{
    /// <summary>
    /// The unique identifier of the migration. This is the same as the identifier used when calling the GetMigration operation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("migrationId")]
    public string? MigrationId { get; init; }

    /// <summary>
    /// The name of the Amazon Lex V1 bot migrated to Amazon Lex V2.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("v1BotName")]
    public string? V1BotName { get; init; }

    /// <summary>
    /// The version of the Amazon Lex V1 bot migrated to Amazon Lex V2.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("v1BotVersion")]
    public string? V1BotVersion { get; init; }

    /// <summary>
    /// The locale of the Amazon Lex V1 bot migrated to Amazon Lex V2.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("v1BotLocale")]
    public V1BotLocale? V1BotLocale { get; init; }

    /// <summary>
    /// The unique identifier of the Amazon Lex V2 bot that the Amazon Lex V1 is being migrated to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("v2BotId")]
    public string? V2BotId { get; init; }

    /// <summary>
    /// The IAM role that Amazon Lex uses to run the Amazon Lex V2 bot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("v2BotRole")]
    public string? V2BotRole { get; init; }

    /// <summary>
    /// Indicates the status of the migration. When the status is COMPLETE the migration is finished and the bot is available in Amazon Lex V2. There may be alerts and warnings that need to be resolved to complete the migration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("migrationStatus")]
    public MigrationStatus? MigrationStatus { get; init; }

    /// <summary>
    /// The strategy used to conduct the migration. CREATE_NEW - Creates a new Amazon Lex V2 bot and migrates the Amazon Lex V1 bot to the new bot. UPDATE_EXISTING - Overwrites the existing Amazon Lex V2 bot metadata and the locale being migrated. It doesn't change any other locales in the Amazon Lex V2 bot. If the locale doesn't exist, a new locale is created in the Amazon Lex V2 bot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("migrationStrategy")]
    public MigrationStrategy? MigrationStrategy { get; init; }

    /// <summary>
    /// The date and time that the migration started.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("migrationTimestamp")]
    public DateTimeOffset? MigrationTimestamp { get; init; }

    /// <summary>
    /// A list of alerts and warnings that indicate issues with the migration for the Amazon Lex V1 bot to Amazon Lex V2. You receive a warning when an Amazon Lex V1 feature has a different implementation if Amazon Lex V2. For more information, see Migrating a bot in the Amazon Lex V2 developer guide.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("alerts")]
    public IReadOnlyList<MigrationAlert>? Alerts { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
