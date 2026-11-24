using System.Text.Json.Serialization;
using CommonElements.Core.Models;

namespace CommonElements.Models;

public record Datum1CommonelementsComDatasetCatalogApi
{
    /// <summary>
    /// Resource this row describes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resource_key")]
    public string? ResourceKey { get; init; }

    /// <summary>
    /// Records held for this association in this resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("record_count")]
    public double? RecordCount { get; init; }

    /// <summary>
    /// How many of the resource's sources could be counted.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sources_measured")]
    public double? SourcesMeasured { get; init; }

    /// <summary>
    /// Whether your key can read the rows behind the count.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("has_access")]
    public bool? HasAccess { get; init; }

    /// <summary>
    /// Whether a zero here means 'nothing happened' or 'this jurisdiction is not matched yet'.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("coverage_note")]
    public string? CoverageNote { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
