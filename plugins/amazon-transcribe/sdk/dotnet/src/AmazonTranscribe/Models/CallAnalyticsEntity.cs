using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;

namespace AmazonTranscribe.Models;

public record CallAnalyticsEntity
{
    /// <summary>
    /// The time, in milliseconds, from the beginning of the audio stream to the start of the identified entity.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("BeginOffsetMillis")]
    public int? BeginOffsetMillis { get; init; }

    /// <summary>
    /// The time, in milliseconds, from the beginning of the audio stream to the end of the identified entity.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EndOffsetMillis")]
    public int? EndOffsetMillis { get; init; }

    /// <summary>
    /// The category of information identified. For example, PII.
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
    /// The word or words that represent the identified entity.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Content")]
    public string? Content { get; init; }

    /// <summary>
    /// The confidence score associated with the identification of an entity in your transcript. Confidence scores are values between 0 and 1. A larger value indicates a higher probability that the identified entity correctly matches the entity spoken in your media.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Confidence")]
    public double? Confidence { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
