using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;

namespace AmazonTranscribe.Models;

public record AbsoluteTimeRange
{
    /// <summary>
    /// The time, in milliseconds, when Amazon Transcribe starts searching for the specified criteria in your audio. If you include StartTime in your request, you must also include EndTime.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StartTime")]
    public int? StartTime { get; init; }

    /// <summary>
    /// The time, in milliseconds, when Amazon Transcribe stops searching for the specified criteria in your audio. If you include EndTime in your request, you must also include StartTime.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EndTime")]
    public int? EndTime { get; init; }

    /// <summary>
    /// The time, in milliseconds, from the start of your media file until the specified value. Amazon Transcribe searches for your specified criteria in this time segment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("First")]
    public int? First { get; init; }

    /// <summary>
    /// The time, in milliseconds, from the specified value until the end of your media file. Amazon Transcribe searches for your specified criteria in this time segment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Last")]
    public int? Last { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
