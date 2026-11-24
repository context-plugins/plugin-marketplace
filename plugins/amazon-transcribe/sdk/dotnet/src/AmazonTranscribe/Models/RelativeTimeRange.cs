using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;

namespace AmazonTranscribe.Models;

public record RelativeTimeRange
{
    /// <summary>
    /// The time, in percentage, when Amazon Transcribe starts searching for the specified criteria in your media file. If you include StartPercentage in your request, you must also include EndPercentage.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StartPercentage")]
    public int? StartPercentage { get; init; }

    /// <summary>
    /// The time, in percentage, when Amazon Transcribe stops searching for the specified criteria in your media file. If you include EndPercentage in your request, you must also include StartPercentage.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EndPercentage")]
    public int? EndPercentage { get; init; }

    /// <summary>
    /// The time, in percentage, from the start of your media file until the specified value. Amazon Transcribe searches for your specified criteria in this time segment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("First")]
    public int? First { get; init; }

    /// <summary>
    /// The time, in percentage, from the specified value until the end of your media file. Amazon Transcribe searches for your specified criteria in this time segment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Last")]
    public int? Last { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
