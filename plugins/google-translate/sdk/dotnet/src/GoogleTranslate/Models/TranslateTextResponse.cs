using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

public record TranslateTextResponse
{
    /// <summary>
    /// Text translation responses if a glossary is provided in the request. This can be the same as <c>translations</c> if no terms apply. This field has the same length as <c>contents</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("glossaryTranslations")]
    public IReadOnlyList<Translation>? GlossaryTranslations { get; init; }

    /// <summary>
    /// Text translation responses with no glossary applied. This field has the same length as <c>contents</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("translations")]
    public IReadOnlyList<Translation>? Translations { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
