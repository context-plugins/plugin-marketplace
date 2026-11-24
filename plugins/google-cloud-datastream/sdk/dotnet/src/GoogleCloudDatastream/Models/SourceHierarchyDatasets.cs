using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Destination datasets are created so that hierarchy of the destination data objects matches the source hierarchy.
/// </summary>
public record SourceHierarchyDatasets
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
