using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record RemoveTagsFromResourceInput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the resource you want to remove the tags from.
    /// </summary>
    [JsonPropertyName("ResourceARN")]
    public required string ResourceArn { get; init; }

    /// <summary>
    /// The keys of the tags you want to remove from the specified resource. A tag is composed of a key-value pair.
    /// </summary>
    [JsonPropertyName("TagKeys")]
    public required IReadOnlyList<string> TagKeys { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
