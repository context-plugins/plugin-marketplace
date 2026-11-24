using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;
using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Models;

public record SegmentDetection
{
    /// <summary>
    /// The type of the segment. Valid values are TECHNICAL_CUE and SHOT.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Type")]
    public Type5? Type { get; init; }

    /// <summary>
    /// The start time of the detected segment in milliseconds from the start of the video. This value is rounded down. For example, if the actual timestamp is 100.6667 milliseconds, Amazon Rekognition Video returns a value of 100 millis.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StartTimestampMillis")]
    public int? StartTimestampMillis { get; init; }

    /// <summary>
    /// The end time of the detected segment, in milliseconds, from the start of the video. This value is rounded down.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EndTimestampMillis")]
    public int? EndTimestampMillis { get; init; }

    /// <summary>
    /// The duration of the detected segment in milliseconds.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DurationMillis")]
    public int? DurationMillis { get; init; }

    /// <summary>
    /// The frame-accurate SMPTE timecode, from the start of a video, for the start of a detected segment. StartTimecode is in HH:MM:SS:fr format (and ;fr for drop frame-rates).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StartTimecodeSMPTE")]
    public string? StartTimecodeSmpte { get; init; }

    /// <summary>
    /// The frame-accurate SMPTE timecode, from the start of a video, for the end of a detected segment. EndTimecode is in HH:MM:SS:fr format (and ;fr for drop frame-rates).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EndTimecodeSMPTE")]
    public string? EndTimecodeSmpte { get; init; }

    /// <summary>
    /// The duration of the timecode for the detected segment in SMPTE format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DurationSMPTE")]
    public string? DurationSmpte { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TechnicalCueSegment")]
    public TechnicalCueSegment? TechnicalCueSegment { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ShotSegment")]
    public ShotSegment? ShotSegment { get; init; }

    /// <summary>
    /// The frame number of the start of a video segment, using a frame index that starts with 0.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StartFrameNumber")]
    public int? StartFrameNumber { get; init; }

    /// <summary>
    /// The frame number at the end of a video segment, using a frame index that starts with 0.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EndFrameNumber")]
    public int? EndFrameNumber { get; init; }

    /// <summary>
    /// The duration of a video segment, expressed in frames.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DurationFrames")]
    public int? DurationFrames { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
