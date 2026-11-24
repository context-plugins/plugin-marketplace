using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// The batch translation request.
/// </summary>
public record BatchTranslateTextRequest
{
    /// <summary>
    /// Required. Output configuration. If 2 input configs match to the same file (that is, same input path), we don't generate output for duplicate inputs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("outputConfig")]
    public OutputConfig2? OutputConfig { get; init; }

    /// <summary>
    /// Required. Source language code. Supported language codes are listed in <see href="https://cloud.google.com/translate/docs/languages">Language Support</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceLanguageCode")]
    public string? SourceLanguageCode { get; init; }

    /// <summary>
    /// Optional. The models to use for translation. Map's key is target language code. Map's value is model name. Value can be a built-in general model, or an AutoML Translation model. The value format depends on model type: - AutoML Translation models: <c>projects/{project-number-or-id}/locations/{location-id}/models/{model-id}</c> - General (built-in) models: <c>projects/{project-number-or-id}/locations/{location-id}/models/general/nmt</c>, If the map is empty or a specific model is not requested for a language pair, then default google model (nmt) is used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("models")]
    public IReadOnlyDictionary<string, string>? Models { get; init; }

    /// <summary>
    /// Required. Specify up to 10 language codes here. Supported language codes are listed in <see href="https://cloud.google.com/translate/docs/languages">Language Support</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("targetLanguageCodes")]
    public IReadOnlyList<string>? TargetLanguageCodes { get; init; }

    /// <summary>
    /// Optional. Glossaries to be applied for translation. It's keyed by target language code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("glossaries")]
    public IReadOnlyDictionary<string, TranslateTextGlossaryConfig>? Glossaries { get; init; }

    /// <summary>
    /// Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. See https://cloud.google.com/translate/docs/advanced/labels for more information.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("labels")]
    public IReadOnlyDictionary<string, string>? Labels { get; init; }

    /// <summary>
    /// Required. Input configurations. The total number of files matched should be &lt;= 100. The total content size should be &lt;= 100M Unicode codepoints. The files must use UTF-8 encoding.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inputConfigs")]
    public IReadOnlyList<InputConfig>? InputConfigs { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
