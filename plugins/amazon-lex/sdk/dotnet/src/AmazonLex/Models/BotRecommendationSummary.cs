using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record BotRecommendationSummary
{
    /// <summary>
    /// The status of the bot recommendation. If the status is Failed, then the reasons for the failure are listed in the failureReasons field.
    /// </summary>
    [JsonPropertyName("botRecommendationStatus")]
    public required BotRecommendationStatus BotRecommendationStatus { get; init; }

    /// <summary>
    /// The unique identifier of the bot recommendation to be updated.
    /// </summary>
    [JsonPropertyName("botRecommendationId")]
    public required string BotRecommendationId { get; init; }

    /// <summary>
    /// A timestamp of the date and time that the bot recommendation was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creationDateTime")]
    public DateTimeOffset? CreationDateTime { get; init; }

    /// <summary>
    /// A timestamp of the date and time that the bot recommendation was last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastUpdatedDateTime")]
    public DateTimeOffset? LastUpdatedDateTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
