using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;

namespace AmazonTranscribe.Models;

public record MedicalResult
{
    /// <summary>
    /// Provides a unique identifier for the Result.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ResultId")]
    public string? ResultId { get; init; }

    /// <summary>
    /// The start time, in seconds, of the Result.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StartTime")]
    public double? StartTime { get; init; }

    /// <summary>
    /// The end time, in seconds, of the Result.
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
    public IReadOnlyList<MedicalAlternative>? Alternatives { get; init; }

    /// <summary>
    /// Indicates the channel identified for the Result.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ChannelId")]
    public string? ChannelId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
