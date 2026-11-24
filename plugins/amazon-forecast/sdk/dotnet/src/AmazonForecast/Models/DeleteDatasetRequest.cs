using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record DeleteDatasetRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the dataset to delete.
    /// </summary>
    [JsonPropertyName("DatasetArn")]
    public required string DatasetArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
