using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record Result
{
    /// <summary>
    /// Provides a unique identifier for the Result.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ResultId")]
    public string? ResultId { get; init; }

    /// <summary>
    /// The start time of the Result in seconds, with millisecond precision (e.g., 1.056).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StartTime")]
    public double? StartTime { get; init; }

    /// <summary>
    /// The end time of the Result in seconds, with millisecond precision (e.g., 1.056).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EndTime")]
    public double? EndTime { get; init; }

    /// <summary>
    /// Indicates if the segment is complete. If IsPartial is true, the segment is not complete. If IsPartial is false, the segment is complete.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("IsPartial")]
    public bool? IsPartial { get; init; }

    /// <summary>
    /// A list of possible alternative transcriptions for the input audio. Each alternative may contain one or more of Items, Entities, or Transcript.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Alternatives")]
    public IReadOnlyList<Alternative>? Alternatives { get; init; }

    /// <summary>
    /// Indicates which audio channel is associated with the Result.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ChannelId")]
    public string? ChannelId { get; init; }

    /// <summary>
    /// The language code that represents the language spoken in your audio stream.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LanguageCode")]
    public LanguageCode4AmazonTranscribeServiceOperationsApi? LanguageCode { get; init; }

    /// <summary>
    /// The language code of the dominant language identified in your stream. If you enabled channel identification and each channel of your audio contains a different language, you may have more than one result.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LanguageIdentification")]
    public IReadOnlyList<LanguageWithScore>? LanguageIdentification { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
