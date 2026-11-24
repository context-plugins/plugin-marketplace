using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record StartMigrationResponse
{
    /// <summary>
    /// The name of the Amazon Lex V1 bot that you are migrating to Amazon Lex V2.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("v1BotName")]
    public string? V1BotName { get; init; }

    /// <summary>
    /// The version of the bot to migrate to Amazon Lex V2.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("v1BotVersion")]
    public string? V1BotVersion { get; init; }

    /// <summary>
    /// The locale used for the Amazon Lex V1 bot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("v1BotLocale")]
    public V1BotLocale2? V1BotLocale { get; init; }

    /// <summary>
    /// The unique identifier for the Amazon Lex V2 bot.
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
    /// The unique identifier that Amazon Lex assigned to the migration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("migrationId")]
    public string? MigrationId { get; init; }

    /// <summary>
    /// The strategy used to conduct the migration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("migrationStrategy")]
    public MigrationStrategy1? MigrationStrategy { get; init; }

    /// <summary>
    /// The date and time that the migration started.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("migrationTimestamp")]
    public DateTimeOffset? MigrationTimestamp { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
