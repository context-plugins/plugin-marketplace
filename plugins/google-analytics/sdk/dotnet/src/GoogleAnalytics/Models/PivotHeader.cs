using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// Dimensions' values in a single pivot.
/// </summary>
public record PivotHeader
{
    /// <summary>
    /// The cardinality of the pivot. The total number of rows for this pivot's fields regardless of how the parameters <c>offset</c> and <c>limit</c> are specified in the request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rowCount")]
    public int? RowCount { get; init; }

    /// <summary>
    /// The size is the same as the cardinality of the corresponding dimension combinations.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pivotDimensionHeaders")]
    public IReadOnlyList<PivotDimensionHeader>? PivotDimensionHeaders { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
