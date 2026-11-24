using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// A document translation request.
/// </summary>
public record TranslateDocumentRequest
{
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
    /// Required. The ISO-639 language code to use for translation of the input document, set to one of the language codes listed in <see href="https://cloud.google.com/translate/docs/languages">Language Support</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("targetLanguageCode")]
    public string? TargetLanguageCode { get; init; }

    /// <summary>
    /// Optional. is_translate_native_pdf_only field for external customers. If true, the page limit of online native pdf translation is 300 and only native pdf pages will be translated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isTranslateNativePdfOnly")]
    public bool? IsTranslateNativePdfOnly { get; init; }

    /// <summary>
    /// Optional. If true, enable auto rotation correction in DVS.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enableRotationCorrection")]
    public bool? EnableRotationCorrection { get; init; }

    /// <summary>
    /// Optional. If true, use the text removal server to remove the shadow text on background image for native pdf translation. Shadow removal feature can only be enabled when is_translate_native_pdf_only: false &amp;&amp; pdf_native_only: false
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enableShadowRemovalNativePdf")]
    public bool? EnableShadowRemovalNativePdf { get; init; }

    /// <summary>
    /// Optional. This flag is to support user customized attribution. If not provided, the default is <c>Machine Translated by Google</c>. Customized attribution should follow rules in https://cloud.google.com/translate/attribution#attribution_and_logos
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customizedAttribution")]
    public string? CustomizedAttribution { get; init; }

    /// <summary>
    /// Optional. Output configurations. Defines if the output file should be stored within Cloud Storage as well as the desired output format. If not provided the translated file will only be returned through a byte-stream and its output mime type will be the same as the input file's mime type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("documentOutputConfig")]
    public DocumentOutputConfig1? DocumentOutputConfig { get; init; }

    /// <summary>
    /// Optional. The ISO-639 language code of the input document if known, for example, "en-US" or "sr-Latn". Supported language codes are listed in <see href="https://cloud.google.com/translate/docs/languages">Language Support</see>. If the source language isn't specified, the API attempts to identify the source language automatically and returns the source language within the response. Source language must be specified if the request contains a glossary or a custom model.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceLanguageCode")]
    public string? SourceLanguageCode { get; init; }

    /// <summary>
    /// Required. Input configurations.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("documentInputConfig")]
    public DocumentInputConfig3? DocumentInputConfig { get; init; }

    /// <summary>
    /// Optional. The <c>model</c> type requested for this translation. The format depends on model type: - AutoML Translation models: <c>projects/{project-number-or-id}/locations/{location-id}/models/{model-id}</c> - General (built-in) models: <c>projects/{project-number-or-id}/locations/{location-id}/models/general/nmt</c>, If not provided, the default Google model (NMT) will be used for translation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("model")]
    public string? Model { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
