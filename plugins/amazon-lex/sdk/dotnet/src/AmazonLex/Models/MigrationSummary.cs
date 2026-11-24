using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record MigrationSummary
{
    /// <summary>
    /// The unique identifier that Amazon Lex assigned to the migration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("migrationId")]
    public string? MigrationId { get; init; }

    /// <summary>
    /// The name of the Amazon Lex V1 bot that is the source of the migration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("v1BotName")]
    public string? V1BotName { get; init; }

    /// <summary>
    /// The version of the Amazon Lex V1 bot that is the source of the migration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("v1BotVersion")]
    public string? V1BotVersion { get; init; }

    /// <summary>
    /// The locale of the Amazon Lex V1 bot that is the source of the migration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("v1BotLocale")]
    public V1BotLocale1? V1BotLocale { get; init; }

    /// <summary>
    /// The unique identifier of the Amazon Lex V2 that is the destination of the migration.
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
    /// The status of the operation. When the status is COMPLETE the bot is available in Amazon Lex V2. There may be alerts and warnings that need to be resolved to complete the migration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("migrationStatus")]
    public MigrationStatus1? MigrationStatus { get; init; }

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
