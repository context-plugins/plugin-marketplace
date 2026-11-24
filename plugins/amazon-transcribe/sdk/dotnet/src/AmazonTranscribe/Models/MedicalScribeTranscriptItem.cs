using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record MedicalScribeTranscriptItem
{
    /// <summary>
    /// The start time, in milliseconds, of the transcribed item.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("BeginAudioTime")]
    public double? BeginAudioTime { get; init; }

    /// <summary>
    /// The end time, in milliseconds, of the transcribed item.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EndAudioTime")]
    public double? EndAudioTime { get; init; }

    /// <summary>
    /// The type of item identified. Options are: PRONUNCIATION (spoken words) and PUNCTUATION.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Type")]
    public TypeAmazonTranscribeServiceOperationsApi? Type { get; init; }

    /// <summary>
    /// The confidence score associated with a word or phrase in your transcript. Confidence scores are values between 0 and 1. A larger value indicates a higher probability that the identified item correctly matches the item spoken in your media.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Confidence")]
    public double? Confidence { get; init; }

    /// <summary>
    /// The word, phrase or punctuation mark that was transcribed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Content")]
    public string? Content { get; init; }

    /// <summary>
    /// Indicates whether the specified item matches a word in the vocabulary filter included in your configuration event. If true, there is a vocabulary filter match.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VocabularyFilterMatch")]
    public bool? VocabularyFilterMatch { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
