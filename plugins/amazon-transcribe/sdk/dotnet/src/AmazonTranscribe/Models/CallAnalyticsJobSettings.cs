using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record CallAnalyticsJobSettings
{
    /// <summary>
    /// The name of the custom vocabulary you want to include in your Call Analytics transcription request. Custom vocabulary names are case sensitive.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VocabularyName")]
    public string? VocabularyName { get; init; }

    /// <summary>
    /// The name of the custom vocabulary filter you want to include in your Call Analytics transcription request. Custom vocabulary filter names are case sensitive. Note that if you include VocabularyFilterName in your request, you must also include VocabularyFilterMethod.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VocabularyFilterName")]
    public string? VocabularyFilterName { get; init; }

    /// <summary>
    /// Specify how you want your custom vocabulary filter applied to your transcript. To replace words with ***, choose mask. To delete words, choose remove. To flag words without changing them, choose tag.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VocabularyFilterMethod")]
    public VocabularyFilterMethod? VocabularyFilterMethod { get; init; }

    /// <summary>
    /// The name of the custom language model you want to use when processing your Call Analytics job. Note that custom language model names are case sensitive. The language of the specified custom language model must match the language code that you specify in your transcription request. If the languages do not match, the custom language model isn't applied. There are no errors or warnings associated with a language mismatch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LanguageModelName")]
    public string? LanguageModelName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ContentRedaction")]
    public ContentRedaction? ContentRedaction { get; init; }

    /// <summary>
    /// You can specify two or more language codes that represent the languages you think may be present in your media. Including more than five is not recommended. If you're unsure what languages are present, do not include this parameter. Including language options can improve the accuracy of language identification. For a list of languages supported with Call Analytics, refer to the Supported languages table. To transcribe speech in Modern Standard Arabic (ar-SA) in Amazon Web Services GovCloud (US) (US-West, us-gov-west-1), Amazon Web Services GovCloud (US) (US-East, us-gov-east-1), Canada (Calgar
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LanguageOptions")]
    public IReadOnlyList<LanguageOption>? LanguageOptions { get; init; }

    /// <summary>
    /// If using automatic language identification in your request and you want to apply a custom language model, a custom vocabulary, or a custom vocabulary filter, include LanguageIdSettings with the relevant sub-parameters (VocabularyName, LanguageModelName, and VocabularyFilterName). LanguageIdSettings supports two to five language codes. Each language code you include can have an associated custom language model, custom vocabulary, and custom vocabulary filter. The language codes that you specify must match the languages of the associated custom language models, custom vocabularies, and custom vo
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LanguageIdSettings")]
    public IReadOnlyDictionary<string, LanguageIdSettings>? LanguageIdSettings { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Summarization")]
    public Summarization? Summarization { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
