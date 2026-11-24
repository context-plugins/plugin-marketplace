using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record SlotTypeRegexConfiguration
{
    /// <summary>
    /// A regular expression used to validate the value of a slot. Use a standard regular expression. Amazon Lex supports the following characters in the regular expression: A-Z, a-z 0-9 Unicode characters ("\ u") Represent Unicode characters with four digits, for example "\u0041" or "\u005A". The following regular expression operators are not supported: Infinite repeaters: *, +, or {x,} with no upper bound. Wild card (.)
    /// </summary>
    [JsonPropertyName("pattern")]
    public required string Pattern { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
