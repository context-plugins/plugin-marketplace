using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;

namespace AwsCertificateManager.Models;

public record ListTagsForResourceResponse
{
    /// <summary>
    /// The tags associated with the resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
