using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record Item
{
    /// <summary>
    /// The start time of the transcribed item in seconds, with millisecond precision (e.g., 1.056)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StartTime")]
    public double? StartTime { get; init; }

    /// <summary>
    /// The end time of the transcribed item in seconds, with millisecond precision (e.g., 1.056)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EndTime")]
    public double? EndTime { get; init; }

    /// <summary>
    /// The type of item identified. Options are: PRONUNCIATION (spoken words) and PUNCTUATION.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Type")]
    public TypeAmazonTranscribeServiceOperationsApi? Type { get; init; }

    /// <summary>
    /// The word or punctuation that was transcribed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Content")]
    public string? Content { get; init; }

    /// <summary>
    /// Indicates whether the specified item matches a word in the vocabulary filter included in your request. If true, there is a vocabulary filter match.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VocabularyFilterMatch")]
    public bool? VocabularyFilterMatch { get; init; }

    /// <summary>
    /// If speaker partitioning is enabled, Speaker labels the speaker of the specified item.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Speaker")]
    public string? Speaker { get; init; }

    /// <summary>
    /// The confidence score associated with a word or phrase in your transcript. Confidence scores are values between 0 and 1. A larger value indicates a higher probability that the identified item correctly matches the item spoken in your media.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Confidence")]
    public double? Confidence { get; init; }

    /// <summary>
    /// If partial result stabilization is enabled, Stable indicates whether the specified item is stable (true) or if it may change when the segment is complete (false).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Stable")]
    public bool? Stable { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
