using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record CallAnalyticsItem
{
    /// <summary>
    /// The time, in milliseconds, from the beginning of the audio stream to the start of the identified item.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("BeginOffsetMillis")]
    public int? BeginOffsetMillis { get; init; }

    /// <summary>
    /// The time, in milliseconds, from the beginning of the audio stream to the end of the identified item.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EndOffsetMillis")]
    public int? EndOffsetMillis { get; init; }

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
    /// The confidence score associated with a word or phrase in your transcript. Confidence scores are values between 0 and 1. A larger value indicates a higher probability that the identified item correctly matches the item spoken in your media.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Confidence")]
    public double? Confidence { get; init; }

    /// <summary>
    /// Indicates whether the specified item matches a word in the vocabulary filter included in your Call Analytics request. If true, there is a vocabulary filter match.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VocabularyFilterMatch")]
    public bool? VocabularyFilterMatch { get; init; }

    /// <summary>
    /// If partial result stabilization is enabled, Stable indicates whether the specified item is stable (true) or if it may change when the segment is complete (false).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Stable")]
    public bool? Stable { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
