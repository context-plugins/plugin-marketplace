using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record DeleteDatasetGroupRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the dataset group to delete.
    /// </summary>
    [JsonPropertyName("DatasetGroupArn")]
    public required string DatasetGroupArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
