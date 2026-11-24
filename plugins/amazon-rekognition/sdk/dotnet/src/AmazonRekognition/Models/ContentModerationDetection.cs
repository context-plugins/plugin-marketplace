using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record ContentModerationDetection
{
    /// <summary>
    /// Time, in milliseconds from the beginning of the video, that the content moderation label was detected. Note that Timestamp is not guaranteed to be accurate to the individual frame where the moderated content first appears.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Timestamp")]
    public int? Timestamp { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ModerationLabel")]
    public ModerationLabel? ModerationLabel { get; init; }

    /// <summary>
    /// The time in milliseconds defining the start of the timeline segment containing a continuously detected moderation label.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StartTimestampMillis")]
    public int? StartTimestampMillis { get; init; }

    /// <summary>
    /// The time in milliseconds defining the end of the timeline segment containing a continuously detected moderation label.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EndTimestampMillis")]
    public int? EndTimestampMillis { get; init; }

    /// <summary>
    /// The time duration of a segment in milliseconds, I.e. time elapsed from StartTimestampMillis to EndTimestampMillis.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DurationMillis")]
    public int? DurationMillis { get; init; }

    /// <summary>
    /// A list of predicted results for the type of content an image contains. For example, the image content might be from animation, sports, or a video game.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ContentTypes")]
    public IReadOnlyList<ContentType>? ContentTypes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
