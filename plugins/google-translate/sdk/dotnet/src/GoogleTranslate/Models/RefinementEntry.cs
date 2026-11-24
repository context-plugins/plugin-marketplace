using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// A single refinement entry for RefineTextRequest.
/// </summary>
public record RefinementEntry
{
    /// <summary>
    /// Required. The source text to be refined.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceText")]
    public string? SourceText { get; init; }

    /// <summary>
    /// Required. The original translation of the source text.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("originalTranslation")]
    public string? OriginalTranslation { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
