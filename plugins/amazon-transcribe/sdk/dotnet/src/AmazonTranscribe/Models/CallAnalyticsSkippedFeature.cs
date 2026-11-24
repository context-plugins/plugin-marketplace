using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record CallAnalyticsSkippedFeature
{
    /// <summary>
    /// Indicates the type of analytics feature that was skipped during the analysis of a call analytics job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Feature")]
    public Feature? Feature { get; init; }

    /// <summary>
    /// Provides a code indicating the reason why a specific analytics feature was skipped during the analysis of a call analytics job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ReasonCode")]
    public ReasonCode? ReasonCode { get; init; }

    /// <summary>
    /// Contains additional information or a message explaining why a specific analytics feature was skipped during the analysis of a call analytics job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Message")]
    public string? Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
