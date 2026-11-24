using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record ListTagsForResourceRequest
{
    /// <summary>
    /// Amazon Resource Name (ARN) of the model, collection, or stream processor that contains the tags that you want a list of.
    /// </summary>
    [JsonPropertyName("ResourceArn")]
    public required string ResourceArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
