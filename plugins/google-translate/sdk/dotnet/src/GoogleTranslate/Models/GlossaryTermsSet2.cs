using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// Used for an equivalent term sets glossary.
/// </summary>
public record GlossaryTermsSet2
{
    /// <summary>
    /// Each term in the set represents a term that can be replaced by the other terms.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("terms")]
    public IReadOnlyList<GlossaryTerm>? Terms { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
