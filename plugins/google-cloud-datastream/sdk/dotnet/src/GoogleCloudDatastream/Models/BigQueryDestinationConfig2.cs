using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// BigQuery destination configuration.
/// </summary>
public record BigQueryDestinationConfig2
{
    /// <summary>
    /// Single destination dataset.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("singleTargetDataset")]
    public SingleTargetDataset2? SingleTargetDataset { get; init; }

    /// <summary>
    /// The guaranteed data freshness (in seconds) when querying tables created by the stream. Editing this field will only affect new tables created in the future, but existing tables will not be impacted. Lower values mean that queries will return fresher data, but may result in higher cost.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dataFreshness")]
    public string? DataFreshness { get; init; }

    /// <summary>
    /// The standard mode
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("merge")]
    public object? Merge { get; init; }

    /// <summary>
    /// Optional. Big Lake Managed Tables (BLMT) configuration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("blmtConfig")]
    public BlmtConfig2? BlmtConfig { get; init; }

    /// <summary>
    /// Append only mode
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("appendOnly")]
    public object? AppendOnly { get; init; }

    /// <summary>
    /// Source hierarchy datasets.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceHierarchyDatasets")]
    public SourceHierarchyDatasets1? SourceHierarchyDatasets { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
