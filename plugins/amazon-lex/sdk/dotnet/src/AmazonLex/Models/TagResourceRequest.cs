using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record TagResourceRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the bot, bot alias, or bot channel to tag.
    /// </summary>
    [JsonPropertyName("resourceARN")]
    public required string ResourceArn { get; init; }

    /// <summary>
    /// A list of tag keys to add to the resource. If a tag key already exists, the existing value is replaced with the new value.
    /// </summary>
    [JsonPropertyName("tags")]
    public required IReadOnlyDictionary<string, string> Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
