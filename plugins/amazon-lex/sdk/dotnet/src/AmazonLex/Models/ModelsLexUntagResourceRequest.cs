using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record ModelsLexUntagResourceRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the resource to remove the tags from.
    /// </summary>
    [JsonPropertyName("resourceArn")]
    public required string ResourceArn { get; init; }

    /// <summary>
    /// A list of tag keys to remove from the resource. If a tag key does not exist on the resource, it is ignored.
    /// </summary>
    [JsonPropertyName("tagKeys")]
    public required IReadOnlyList<string> TagKeys { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
