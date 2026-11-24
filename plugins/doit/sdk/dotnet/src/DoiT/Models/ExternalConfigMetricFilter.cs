using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Metric filter to limit report rows by metric value.
/// On PATCH, omit to preserve the existing filter; send null to remove it.
/// </summary>
public record ExternalConfigMetricFilter
{
    /// <summary>
    /// Metric selector used in reports and filters.
    /// </summary>
    [JsonPropertyName("metric")]
    public required ExternalMetric Metric { get; init; }

    /// <summary>
    /// Comparison operator for filtering metric values: <c>gt</c> (Greater Than), <c>lt</c> (Less
    /// Than), <c>lte</c> (Less Than or Equals), <c>gte</c> (Greater Than or Equals), <c>b</c> (Between),
    /// <c>nb</c> (Not Between), <c>e</c> (Equals), <c>ne</c> (Not Equals).
    /// </summary>
    [JsonPropertyName("operator")]
    public required Operator Operator { get; init; }

    [JsonPropertyName("values")]
    public required IReadOnlyList<double> Values { get; init; }

    /// <summary>
    /// Whether the threshold applies to each value (default) or the series total.
    /// Same field as the DoiT Console metric filter <c>operand</c> (<c>OperandSingleValue</c> /
    /// <c>OperandSeriesTotal</c>). On input, omitted defaults to <c>single_value</c>. GET responses
    /// echo the effective value (<c>single_value</c> or <c>series_total</c>).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("operand")]
    public Operand? Operand { get; init; } = Operand.SingleValue;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
