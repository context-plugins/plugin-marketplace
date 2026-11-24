using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;

namespace AmazonSwf.Models;

public record TagResourceInput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) for the Amazon SWF domain.
    /// </summary>
    [JsonPropertyName("resourceArn")]
    public required string ResourceArn { get; init; }

    /// <summary>
    /// The list of tags to add to a domain. Tags may only contain unicode letters, digits, whitespace, or these symbols: _ . : / = + - @.
    /// </summary>
    [JsonPropertyName("tags")]
    public required IReadOnlyList<ResourceTag> Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
