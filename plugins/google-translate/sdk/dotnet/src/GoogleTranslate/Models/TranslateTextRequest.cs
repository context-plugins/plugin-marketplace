using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// The request message for synchronous translation.
/// </summary>
public record TranslateTextRequest
{
    /// <summary>
    /// Required. The content of the input in string format. We recommend the total content be less than 30,000 codepoints. The max length of this field is 1024. Use BatchTranslateText for larger text.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contents")]
    public IReadOnlyList<string>? Contents { get; init; }

    /// <summary>
    /// Optional. The format of the source text, for example, "text/html", "text/plain". If left blank, the MIME type defaults to "text/html".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mimeType")]
    public string? MimeType { get; init; }

    /// <summary>
    /// Optional. The ISO-639 language code of the input text if known, for example, "en-US" or "sr-Latn". Supported language codes are listed in <see href="https://cloud.google.com/translate/docs/languages">Language Support</see>. If the source language isn't specified, the API attempts to identify the source language automatically and returns the source language within the response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceLanguageCode")]
    public string? SourceLanguageCode { get; init; }

    /// <summary>
    /// Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. See https://cloud.google.com/translate/docs/advanced/labels for more information.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("labels")]
    public IReadOnlyDictionary<string, string>? Labels { get; init; }

    /// <summary>
    /// Optional. Glossary to be applied. The glossary must be within the same region (have the same location-id) as the model, otherwise an INVALID_ARGUMENT (400) error is returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("glossaryConfig")]
    public TranslateTextGlossaryConfig2? GlossaryConfig { get; init; }

    /// <summary>
    /// Optional. Transliteration to be applied.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transliterationConfig")]
    public TransliterationConfig2? TransliterationConfig { get; init; }

    /// <summary>
    /// Optional. The <c>model</c> type requested for this translation. The format depends on model type: - AutoML Translation models: <c>projects/{project-number-or-id}/locations/{location-id}/models/{model-id}</c> - General (built-in) models: <c>projects/{project-number-or-id}/locations/{location-id}/models/general/nmt</c>, - Translation LLM models: <c>projects/{project-number-or-id}/locations/{location-id}/models/general/translation-llm</c>, For global (non-regionalized) requests, use <c>location-id</c> <c>global</c>. For example, <c>projects/{project-number-or-id}/locations/global/models/general/nmt</c>. If not provided, the default Google model (NMT) will be used
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("model")]
    public string? Model { get; init; }

    /// <summary>
    /// Required. The ISO-639 language code to use for translation of the input text, set to one of the language codes listed in <see href="https://cloud.google.com/translate/docs/languages">Language Support</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("targetLanguageCode")]
    public string? TargetLanguageCode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
