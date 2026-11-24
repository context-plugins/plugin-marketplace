using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Only supplied configuration fields change. A zero value is a valid threshold. Fields cannot be null except ignoreValuesRange.
/// </summary>
public record AlertConfigUpdate
{
    /// <summary>
    /// Ignore metric values within these inclusive bounds for percentage-change alerts. Bounds use the metric units, not percentage-change units, and must satisfy lowerBound &lt;= upperBound. Omission on PATCH preserves the range; null clears it. Changing condition away from percentage-change clears the range; supplying a non-null range with another condition is rejected.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ignoreValuesRange")]
    public AlertIgnoreValuesRange? IgnoreValuesRange { get; init; }

    /// <summary>
    /// Omission preserves the saved data source. Tokenomics requires customer enablement.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dataSource")]
    public DataSource1? DataSource { get; init; }

    /// <summary>
    /// All supplied filters are applied together (AND across filters). Values within each filter follow its matching mode. Omission preserves scopes and [] clears them.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scopes")]
    [MaxLength(26)]
    public IReadOnlyList<ExternalConfigFilter>? Scopes { get; init; }

    /// <summary>
    /// Define how metrics are selected and filtered in reports.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metric")]
    public MetricConfig? Metric { get; init; }

    /// <summary>
    /// Currency code for monetary values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currency")]
    public Currency? Currency { get; init; }

    /// <summary>
    /// The period each evaluation looks at. Omission preserves the saved interval.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timeInterval")]
    public TimeInterval1? TimeInterval { get; init; }

    /// <summary>
    /// Omission preserves the saved condition.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("condition")]
    public Condition1? Condition { get; init; }

    /// <summary>
    /// Text/operator used to filter metric values in metric filters (gt = greater than, lt = less than).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("operator")]
    public MetricFilterText? Operator { get; init; }

    /// <summary>
    /// The <c>condition</c> threshold value. Omission preserves the saved value; an explicit 0 is a valid threshold.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public double? Value { get; init; }

    /// <summary>
    /// Add a dimension to break down the evaluation of the condition. Use type:id from GET /analytics/v1/dimensions, for example fixed:service_description. Omission preserves the saved breakdown and an empty string clears it. Not allowed with condition: <c>forecast</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("evaluateForEach")]
    public string? EvaluateForEach { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
