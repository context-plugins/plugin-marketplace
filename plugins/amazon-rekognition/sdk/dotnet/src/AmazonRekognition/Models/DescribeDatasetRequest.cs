using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record DescribeDatasetRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the dataset that you want to describe.
    /// </summary>
    [JsonPropertyName("DatasetArn")]
    public required string DatasetArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
