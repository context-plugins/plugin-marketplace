using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record VocabularyFilterInfo
{
    /// <summary>
    /// A unique name, chosen by you, for your custom vocabulary filter. This name is case sensitive, cannot contain spaces, and must be unique within an Amazon Web Services account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VocabularyFilterName")]
    public string? VocabularyFilterName { get; init; }

    /// <summary>
    /// The language code that represents the language of the entries in your vocabulary filter. Each custom vocabulary filter must contain terms in only one language. A custom vocabulary filter can only be used to transcribe files in the same language as the filter. For example, if you create a custom vocabulary filter using US English (en-US), you can only apply this filter to files that contain English audio. For a list of supported languages and their associated language codes, refer to the Supported languages table.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LanguageCode")]
    public LanguageCodeAmazonTranscribeServiceVocabularyFilterApi? LanguageCode { get; init; }

    /// <summary>
    /// The date and time the specified custom vocabulary filter was last modified. Timestamps are in the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00 represents 12:32 PM UTC-7 on May 4, 2022.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LastModifiedTime")]
    public DateTimeOffset? LastModifiedTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
