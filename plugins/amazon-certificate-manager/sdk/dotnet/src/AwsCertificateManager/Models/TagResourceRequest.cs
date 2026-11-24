using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;

namespace AwsCertificateManager.Models;

public record TagResourceRequest
{
    /// <summary>
    /// The ARN of the ACM resource to which the tag is to be applied.
    /// </summary>
    [JsonPropertyName("ResourceArn")]
    public required string ResourceArn { get; init; }

    /// <summary>
    /// The key-value pair that defines the tag to apply.
    /// </summary>
    [JsonPropertyName("Tags")]
    public required IReadOnlyList<Tag> Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
