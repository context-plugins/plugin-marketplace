using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record VocabularyInfo
{
    /// <summary>
    /// A unique name, chosen by you, for your custom vocabulary. This name is case sensitive, cannot contain spaces, and must be unique within an Amazon Web Services account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VocabularyName")]
    public string? VocabularyName { get; init; }

    /// <summary>
    /// The language code used to create your custom vocabulary. Each custom vocabulary must contain terms in only one language. A custom vocabulary can only be used to transcribe files in the same language as the custom vocabulary. For example, if you create a custom vocabulary using US English (en-US), you can only apply this custom vocabulary to files that contain English audio.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LanguageCode")]
    public LanguageCode3? LanguageCode { get; init; }

    /// <summary>
    /// The date and time the specified custom vocabulary was last modified. Timestamps are in the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00 represents 12:32 PM UTC-7 on May 4, 2022.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LastModifiedTime")]
    public DateTimeOffset? LastModifiedTime { get; init; }

    /// <summary>
    /// The processing state of your custom vocabulary. If the state is READY, you can use the custom vocabulary in a StartTranscriptionJob request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VocabularyState")]
    public VocabularyState2? VocabularyState { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
