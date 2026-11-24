using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;

namespace AmazonSwf.Models;

public record TagFilter
{
    /// <summary>
    /// Specifies the tag that must be associated with the execution for it to meet the filter criteria. Tags may only contain unicode letters, digits, whitespace, or these symbols: _ . : / = + - @.
    /// </summary>
    [JsonPropertyName("tag")]
    public required string Tag { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
