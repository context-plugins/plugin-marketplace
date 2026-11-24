using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record DeleteDatasetImportJobRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the dataset import job to delete.
    /// </summary>
    [JsonPropertyName("DatasetImportJobArn")]
    public required string DatasetImportJobArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
