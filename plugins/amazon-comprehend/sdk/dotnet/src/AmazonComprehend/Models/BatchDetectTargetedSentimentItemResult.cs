using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record BatchDetectTargetedSentimentItemResult
{
    /// <summary>
    /// The zero-based index of this result in the input list.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Index")]
    public int? Index { get; init; }

    /// <summary>
    /// An array of targeted sentiment entities.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Entities")]
    public IReadOnlyList<TargetedSentimentEntity>? Entities { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
