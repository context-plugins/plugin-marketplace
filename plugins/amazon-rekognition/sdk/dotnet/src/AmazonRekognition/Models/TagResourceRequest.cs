using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record TagResourceRequest
{
    /// <summary>
    /// Amazon Resource Name (ARN) of the model, collection, or stream processor that you want to assign the tags to.
    /// </summary>
    [JsonPropertyName("ResourceArn")]
    public required string ResourceArn { get; init; }

    /// <summary>
    /// The key-value tags to assign to the resource.
    /// </summary>
    [JsonPropertyName("Tags")]
    public required IReadOnlyDictionary<string, string> Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
