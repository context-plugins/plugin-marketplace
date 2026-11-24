using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.AnyOf;
using DoiT.Models.Enums;

namespace DoiT.Models;

public record Result1
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("schema")]
    public IReadOnlyList<SchemaField>? Schema { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mlFeatures")]
    public IReadOnlyList<MlFeature>? MlFeatures { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rows")]
    public IReadOnlyList<IReadOnlyList<ValueDoiTReportsApi>>? Rows { get; init; }

    /// <summary>
    /// Secondary time range rows.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("secondaryRows")]
    public IReadOnlyList<IReadOnlyList<ValueDoiTReportsApi>>? SecondaryRows { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("forecastRows")]
    public IReadOnlyList<IReadOnlyList<ValueDoiTReportsApi>>? ForecastRows { get; init; }

    /// <summary>
    /// If true, results were fetched from the cache.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cacheHit")]
    public bool? CacheHit { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
