using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record ToxicLabels
{
    /// <summary>
    /// Array of toxic content types identified in the string.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Labels")]
    public IReadOnlyList<ToxicContent>? Labels { get; init; }

    /// <summary>
    /// Overall toxicity score for the string. Value range is zero to one, where one is the highest confidence.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Toxicity")]
    public double? Toxicity { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
