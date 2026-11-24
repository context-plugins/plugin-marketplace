using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record BotAliasSummary
{
    /// <summary>
    /// The unique identifier assigned to the bot alias. You can use this ID to get detailed information about the alias using the DescribeBotAlias operation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botAliasId")]
    public string? BotAliasId { get; init; }

    /// <summary>
    /// The name of the bot alias.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botAliasName")]
    public string? BotAliasName { get; init; }

    /// <summary>
    /// The description of the bot alias.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// The version of the bot that the bot alias references.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botVersion")]
    public string? BotVersion { get; init; }

    /// <summary>
    /// The current state of the bot alias. If the status is Available, the alias is ready for use.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botAliasStatus")]
    public BotAliasStatus? BotAliasStatus { get; init; }

    /// <summary>
    /// A timestamp of the date and time that the bot alias was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creationDateTime")]
    public DateTimeOffset? CreationDateTime { get; init; }

    /// <summary>
    /// A timestamp of the date and time that the bot alias was last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastUpdatedDateTime")]
    public DateTimeOffset? LastUpdatedDateTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
