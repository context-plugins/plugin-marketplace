using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// The request message for synchronous romanization.
/// </summary>
public record RomanizeTextRequest
{
    /// <summary>
    /// Required. The content of the input in string format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contents")]
    public IReadOnlyList<string>? Contents { get; init; }

    /// <summary>
    /// Optional. The ISO-639 language code of the input text if known, for example, "hi" or "zh". Supported language codes are listed in <see href="https://cloud.google.com/translate/docs/languages#roman">Language Support</see>. If the source language isn't specified, the API attempts to identify the source language automatically and returns the source language for each content in the response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceLanguageCode")]
    public string? SourceLanguageCode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
