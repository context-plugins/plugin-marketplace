using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record DescribeExplainabilityRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the Explaianability to describe.
    /// </summary>
    [JsonPropertyName("ExplainabilityArn")]
    public required string ExplainabilityArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
