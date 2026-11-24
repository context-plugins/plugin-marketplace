using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;

namespace AmazonAppSync.Models;

public record ListTagsForResourceResponse
{
    /// <summary>
    /// A TagMap object.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyDictionary<string, string>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
