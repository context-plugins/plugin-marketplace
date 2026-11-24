using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Source hierarchy datasets.
/// </summary>
public record SourceHierarchyDatasets1
{
    /// <summary>
    /// Optional. The project id of the BigQuery dataset. If not specified, the project will be inferred from the stream resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("projectId")]
    public string? ProjectId { get; init; }

    /// <summary>
    /// The dataset template to use for dynamic dataset creation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("datasetTemplate")]
    public DatasetTemplate2? DatasetTemplate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
