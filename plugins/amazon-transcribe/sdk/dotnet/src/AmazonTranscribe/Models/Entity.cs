using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;

namespace AmazonTranscribe.Models;

public record Entity
{
    /// <summary>
    /// The start time of the utterance that was identified as PII in seconds, with millisecond precision (e.g., 1.056)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StartTime")]
    public double? StartTime { get; init; }

    /// <summary>
    /// The end time of the utterance that was identified as PII in seconds, with millisecond precision (e.g., 1.056)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EndTime")]
    public double? EndTime { get; init; }

    /// <summary>
    /// The category of information identified. The only category is PII.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Category")]
    public string? Category { get; init; }

    /// <summary>
    /// The type of PII identified. For example, NAME or CREDIT_DEBIT_NUMBER.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Type")]
    public string? Type { get; init; }

    /// <summary>
    /// The word or words identified as PII.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Content")]
    public string? Content { get; init; }

    /// <summary>
    /// The confidence score associated with the identified PII entity in your audio. Confidence scores are values between 0 and 1. A larger value indicates a higher probability that the identified entity correctly matches the entity spoken in your media.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Confidence")]
    public double? Confidence { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
