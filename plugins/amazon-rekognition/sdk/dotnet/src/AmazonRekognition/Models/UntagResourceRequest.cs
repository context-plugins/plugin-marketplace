using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record UntagResourceRequest
{
    /// <summary>
    /// Amazon Resource Name (ARN) of the model, collection, or stream processor that you want to remove the tags from.
    /// </summary>
    [JsonPropertyName("ResourceArn")]
    public required string ResourceArn { get; init; }

    /// <summary>
    /// A list of the tags that you want to remove.
    /// </summary>
    [JsonPropertyName("TagKeys")]
    public required IReadOnlyList<string> TagKeys { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
