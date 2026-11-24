using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record ListTagsForResourceRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the resource to get a list of tags for.
    /// </summary>
    [JsonPropertyName("resourceARN")]
    public required string ResourceArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
