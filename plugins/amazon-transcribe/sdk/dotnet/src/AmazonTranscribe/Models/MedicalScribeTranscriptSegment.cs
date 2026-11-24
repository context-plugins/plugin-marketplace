using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;

namespace AmazonTranscribe.Models;

public record MedicalScribeTranscriptSegment
{
    /// <summary>
    /// The identifier of the segment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SegmentId")]
    public string? SegmentId { get; init; }

    /// <summary>
    /// The start time, in milliseconds, of the segment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("BeginAudioTime")]
    public double? BeginAudioTime { get; init; }

    /// <summary>
    /// The end time, in milliseconds, of the segment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EndAudioTime")]
    public double? EndAudioTime { get; init; }

    /// <summary>
    /// Contains transcribed text of the segment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Content")]
    public string? Content { get; init; }

    /// <summary>
    /// Contains words, phrases, or punctuation marks in your segment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Items")]
    public IReadOnlyList<MedicalScribeTranscriptItem>? Items { get; init; }

    /// <summary>
    /// Indicates if the segment is complete. If IsPartial is true, the segment is not complete. If IsPartial is false, the segment is complete.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("IsPartial")]
    public bool? IsPartial { get; init; }

    /// <summary>
    /// Indicates which audio channel is associated with the MedicalScribeTranscriptSegment. If MedicalScribeChannelDefinition is not provided in the MedicalScribeConfigurationEvent, then this field will not be included.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ChannelId")]
    public string? ChannelId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
