using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record DescribeFlywheelIterationRequest
{
    [JsonPropertyName("FlywheelArn")]
    public required string FlywheelArn { get; init; }

    [JsonPropertyName("FlywheelIterationId")]
    public required string FlywheelIterationId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
