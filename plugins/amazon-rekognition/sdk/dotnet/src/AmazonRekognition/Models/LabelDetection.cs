using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record LabelDetection
{
    /// <summary>
    /// Time, in milliseconds from the start of the video, that the label was detected. Note that Timestamp is not guaranteed to be accurate to the individual frame where the label first appears.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Timestamp")]
    public int? Timestamp { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Label")]
    public Label? Label { get; init; }

    /// <summary>
    /// The time in milliseconds defining the start of the timeline segment containing a continuously detected label.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StartTimestampMillis")]
    public int? StartTimestampMillis { get; init; }

    /// <summary>
    /// The time in milliseconds defining the end of the timeline segment containing a continuously detected label.
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

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
