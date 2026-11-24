using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record UpdateDatasetEntriesRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the dataset that you want to update.
    /// </summary>
    [JsonPropertyName("DatasetArn")]
    public required string DatasetArn { get; init; }

    [JsonPropertyName("Changes")]
    public required DatasetChanges Changes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
