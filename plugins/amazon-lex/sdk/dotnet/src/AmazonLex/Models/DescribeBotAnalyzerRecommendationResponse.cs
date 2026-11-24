using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record DescribeBotAnalyzerRecommendationResponse
{
    /// <summary>
    /// The unique identifier of the bot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botId")]
    public string? BotId { get; init; }

    /// <summary>
    /// The version of the bot that was analyzed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botVersion")]
    public string? BotVersion { get; init; }

    /// <summary>
    /// The locale identifier of the bot locale that was analyzed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("localeId")]
    public string? LocaleId { get; init; }

    /// <summary>
    /// The current status of the analysis. Valid Values: Processing | Available | Failed | Stopping | Stopped
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botAnalyzerStatus")]
    public BotAnalyzerStatus1? BotAnalyzerStatus { get; init; }

    /// <summary>
    /// The date and time when the analysis was initiated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creationDateTime")]
    public DateTimeOffset? CreationDateTime { get; init; }

    /// <summary>
    /// A list of recommendations for optimizing your bot configuration. Each recommendation includes the issue location, priority, description, and proposed fix.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botAnalyzerRecommendationList")]
    public IReadOnlyList<BotAnalyzerRecommendation>? BotAnalyzerRecommendationList { get; init; }

    /// <summary>
    /// If the response is truncated, this token can be used in a subsequent request to retrieve the next page of recommendations.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
