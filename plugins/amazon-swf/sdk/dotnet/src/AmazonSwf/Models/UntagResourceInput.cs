using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;

namespace AmazonSwf.Models;

public record UntagResourceInput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) for the Amazon SWF domain.
    /// </summary>
    [JsonPropertyName("resourceArn")]
    public required string ResourceArn { get; init; }

    /// <summary>
    /// The list of tags to remove from the Amazon SWF domain.
    /// </summary>
    [JsonPropertyName("tagKeys")]
    public required IReadOnlyList<string> TagKeys { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
