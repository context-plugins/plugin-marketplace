using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// Represents a single entry in a glossary.
/// </summary>
public record GlossaryEntry
{
    /// <summary>
    /// Identifier. The resource name of the entry. Format: <c>projects/*/locations/*/glossaries/*/glossaryEntries/*</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Describes the glossary entry.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Used for an equivalent term sets glossary.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("termsSet")]
    public GlossaryTermsSet2? TermsSet { get; init; }

    /// <summary>
    /// Used for an unidirectional glossary.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("termsPair")]
    public GlossaryTermsPair2? TermsPair { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
