using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record UntagResourceRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the given Amazon Comprehend resource from which you want to remove the tags.
    /// </summary>
    [JsonPropertyName("ResourceArn")]
    public required string ResourceArn { get; init; }

    /// <summary>
    /// The initial part of a key-value pair that forms a tag being removed from a given resource. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department. Keys must be unique and cannot be duplicated for a particular resource.
    /// </summary>
    [JsonPropertyName("TagKeys")]
    public required IReadOnlyList<string> TagKeys { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
