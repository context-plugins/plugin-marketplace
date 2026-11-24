using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// The BatchTranslateDocument request.
/// </summary>
public record BatchTranslateDocumentRequest
{
    /// <summary>
    /// Optional. This flag is to support user customized attribution. If not provided, the default is <c>Machine Translated by Google</c>. Customized attribution should follow rules in https://cloud.google.com/translate/attribution#attribution_and_logos
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customizedAttribution")]
    public string? CustomizedAttribution { get; init; }

    /// <summary>
    /// Required. Output configuration. If 2 input configs match to the same file (that is, same input path), we don't generate output for duplicate inputs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("outputConfig")]
    public BatchDocumentOutputConfig1? OutputConfig { get; init; }

    /// <summary>
    /// Optional. If true, use the text removal server to remove the shadow text on background image for native pdf translation. Shadow removal feature can only be enabled when is_translate_native_pdf_only: false &amp;&amp; pdf_native_only: false
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enableShadowRemovalNativePdf")]
    public bool? EnableShadowRemovalNativePdf { get; init; }

    /// <summary>
    /// Optional. The models to use for translation. Map's key is target language code. Map's value is the model name. Value can be a built-in general model, or an AutoML Translation model. The value format depends on model type: - AutoML Translation models: <c>projects/{project-number-or-id}/locations/{location-id}/models/{model-id}</c> - General (built-in) models: <c>projects/{project-number-or-id}/locations/{location-id}/models/general/nmt</c>, If the map is empty or a specific model is not requested for a language pair, then default google model (nmt) is used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("models")]
    public IReadOnlyDictionary<string, string>? Models { get; init; }

    /// <summary>
    /// Required. The ISO-639 language code to use for translation of the input document. Specify up to 10 language codes here. Supported language codes are listed in <see href="https://cloud.google.com/translate/docs/languages">Language Support</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("targetLanguageCodes")]
    public IReadOnlyList<string>? TargetLanguageCodes { get; init; }

    /// <summary>
    /// Optional. The file format conversion map that is applied to all input files. The map key is the original mime_type. The map value is the target mime_type of translated documents. Supported file format conversion includes: - <c>application/pdf</c> to <c>application/vnd.openxmlformats-officedocument.wordprocessingml.document</c> If nothing specified, output files will be in the same format as the original file.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("formatConversions")]
    public IReadOnlyDictionary<string, string>? FormatConversions { get; init; }

    /// <summary>
    /// Optional. Glossaries to be applied. It's keyed by target language code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("glossaries")]
    public IReadOnlyDictionary<string, TranslateTextGlossaryConfig>? Glossaries { get; init; }

    /// <summary>
    /// Required. The ISO-639 language code of the input document if known, for example, "en-US" or "sr-Latn". Supported language codes are listed in <see href="https://cloud.google.com/translate/docs/languages">Language Support</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceLanguageCode")]
    public string? SourceLanguageCode { get; init; }

    /// <summary>
    /// Required. Input configurations. The total number of files matched should be &lt;= 100. The total content size to translate should be &lt;= 100M Unicode codepoints. The files must use UTF-8 encoding.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inputConfigs")]
    public IReadOnlyList<BatchDocumentInputConfig>? InputConfigs { get; init; }

    /// <summary>
    /// Optional. If true, only native pdf pages will be translated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pdfNativeOnly")]
    public bool? PdfNativeOnly { get; init; }

    /// <summary>
    /// Optional. If true, enable auto rotation correction in DVS.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enableRotationCorrection")]
    public bool? EnableRotationCorrection { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
