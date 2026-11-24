using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record DescribeDatasetRequest
{
    /// <summary>
    /// The ARN of the dataset.
    /// </summary>
    [JsonPropertyName("DatasetArn")]
    public required string DatasetArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
