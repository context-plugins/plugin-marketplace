using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// The response message for synchronous romanization.
/// </summary>
public record RomanizeTextResponse
{
    /// <summary>
    /// Text romanization responses. This field has the same length as <c>contents</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("romanizations")]
    public IReadOnlyList<Romanization>? Romanizations { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
