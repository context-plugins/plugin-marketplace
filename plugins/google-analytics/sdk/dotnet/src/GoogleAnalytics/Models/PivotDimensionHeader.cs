using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// Summarizes dimension values from a row for this pivot.
/// </summary>
public record PivotDimensionHeader
{
    /// <summary>
    /// Values of multiple dimensions in a pivot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dimensionValues")]
    public IReadOnlyList<DimensionValue>? DimensionValues { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
