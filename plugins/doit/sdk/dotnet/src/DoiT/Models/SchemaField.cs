using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Schema of a report result column.
/// </summary>
public record SchemaField
{
    /// <summary>
    /// Stable allocation-group ID used to select the allocation dimension in report configurations. Omitted for other report columns.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// Column name. Matches the corresponding value position in each row.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Wire-format type of the column values. Dimension columns use string; metric columns use float (cost, usage, saving, custom, and extended metrics) or integer (count aggregation). Time-series reports include a timestamp column.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public Type7DoiTReportsApi? Type { get; init; }

    /// <summary>
    /// Semantic unit of the column values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unit")]
    public Unit2? Unit { get; init; }

    /// <summary>
    /// Effective ISO 4217 currency code when unit is currency.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currency")]
    public string? Currency { get; init; }

    /// <summary>
    /// Authoritative aggregation applied to this metric column.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("aggregation")]
    public Aggregation1? Aggregation { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
