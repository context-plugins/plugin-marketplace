using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Single destination dataset.
/// </summary>
public record SingleTargetDataset2
{
    /// <summary>
    /// The dataset ID of the target dataset. DatasetIds allowed characters: https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets#datasetreference.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("datasetId")]
    public string? DatasetId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
