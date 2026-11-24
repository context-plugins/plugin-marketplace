using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// Request message for RefineText.
/// </summary>
public record RefineTextRequest
{
    /// <summary>
    /// Required. The BCP-47 language code for translation output, for example, "zh-CN".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("targetLanguageCode")]
    public string? TargetLanguageCode { get; init; }

    /// <summary>
    /// Required. The BCP-47 language code of the source text in the request, for example, "en-US".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceLanguageCode")]
    public string? SourceLanguageCode { get; init; }

    /// <summary>
    /// Required. The source texts and original translations in the source and target languages.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("refinementEntries")]
    public IReadOnlyList<RefinementEntry>? RefinementEntries { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
