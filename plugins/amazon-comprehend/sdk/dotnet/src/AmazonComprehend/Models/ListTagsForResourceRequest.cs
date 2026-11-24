using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record ListTagsForResourceRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the given Amazon Comprehend resource you are querying.
    /// </summary>
    [JsonPropertyName("ResourceArn")]
    public required string ResourceArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
