using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record DetectTargetedSentimentResponse
{
    /// <summary>
    /// Targeted sentiment analysis for each of the entities identified in the input text.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Entities")]
    public IReadOnlyList<TargetedSentimentEntity>? Entities { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
