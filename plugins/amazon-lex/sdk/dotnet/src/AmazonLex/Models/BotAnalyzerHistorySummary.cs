using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record BotAnalyzerHistorySummary
{
    /// <summary>
    /// The status of the historical analysis execution. Valid Values: Processing | Available | Failed | Stopping | Stopped
    /// </summary>
    [JsonPropertyName("botAnalyzerStatus")]
    public required BotAnalyzerStatus BotAnalyzerStatus { get; init; }

    /// <summary>
    /// The date and time when the analysis was initiated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creationDateTime")]
    public DateTimeOffset? CreationDateTime { get; init; }

    /// <summary>
    /// The unique identifier for the analysis request.
    /// </summary>
    [JsonPropertyName("botAnalyzerRequestId")]
    public required string BotAnalyzerRequestId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
