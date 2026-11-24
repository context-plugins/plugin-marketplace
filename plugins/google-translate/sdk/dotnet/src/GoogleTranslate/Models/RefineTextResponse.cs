using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// Response message for RefineText.
/// </summary>
public record RefineTextResponse
{
    /// <summary>
    /// The refined translations obtained from the original translations.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("refinedTranslations")]
    public IReadOnlyList<string>? RefinedTranslations { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
