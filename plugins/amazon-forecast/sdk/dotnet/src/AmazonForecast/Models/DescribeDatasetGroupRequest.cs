using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record DescribeDatasetGroupRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the dataset group.
    /// </summary>
    [JsonPropertyName("DatasetGroupArn")]
    public required string DatasetGroupArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
