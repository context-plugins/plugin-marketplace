using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Models;

namespace GoogleCloudTalentSolution.Models;

/// <summary>
/// Histogram result that matches HistogramQuery specified in searches.
/// </summary>
public record HistogramQueryResult
{
    /// <summary>
    /// A map from the values of the facet associated with distinct values to the number of matching entries with corresponding value. The key format is: * (for string histogram) string values stored in the field. * (for named numeric bucket) name specified in <c>bucket()</c> function, like for <c>bucket(0, MAX, "non-negative")</c>, the key will be <c>non-negative</c>. * (for anonymous numeric bucket) range formatted as <c>-</c>, for example, <c>0-1000</c>, <c>MIN-0</c>, and <c>0-MAX</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("histogram")]
    public IReadOnlyDictionary<string, string>? Histogram { get; init; }

    /// <summary>
    /// Requested histogram expression.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("histogramQuery")]
    public string? HistogramQuery { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
