using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record DatasetChanges
{
    /// <summary>
    /// A Base64-encoded binary data object containing one or JSON lines that either update the dataset or are additions to the dataset. You change a dataset by calling UpdateDatasetEntries. If you are using an AWS SDK to call UpdateDatasetEntries, you don't need to encode Changes as the SDK encodes the data for you. For example JSON lines, see Image-Level labels in manifest files and and Object localization in manifest files in the Amazon Rekognition Custom Labels Developer Guide.
    /// </summary>
    [JsonPropertyName("GroundTruth")]
    public required string GroundTruth { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
