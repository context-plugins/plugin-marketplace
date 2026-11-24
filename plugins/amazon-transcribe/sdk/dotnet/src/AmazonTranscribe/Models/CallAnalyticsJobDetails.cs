using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;

namespace AmazonTranscribe.Models;

public record CallAnalyticsJobDetails
{
    /// <summary>
    /// Contains information about any skipped analytics features during the analysis of a call analytics job. This array lists all the analytics features that were skipped, along with their corresponding reason code and message.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Skipped")]
    public IReadOnlyList<CallAnalyticsSkippedFeature>? Skipped { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
