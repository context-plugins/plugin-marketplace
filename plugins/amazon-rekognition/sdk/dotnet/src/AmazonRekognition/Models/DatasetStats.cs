using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record DatasetStats
{
    /// <summary>
    /// The total number of images in the dataset that have labels.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LabeledEntries")]
    public int? LabeledEntries { get; init; }

    /// <summary>
    /// The total number of images in the dataset.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TotalEntries")]
    public int? TotalEntries { get; init; }

    /// <summary>
    /// The total number of labels declared in the dataset.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TotalLabels")]
    public int? TotalLabels { get; init; }

    /// <summary>
    /// The total number of entries that contain at least one error.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ErrorEntries")]
    public int? ErrorEntries { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
