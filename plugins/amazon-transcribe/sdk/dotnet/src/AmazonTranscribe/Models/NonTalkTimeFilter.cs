using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;

namespace AmazonTranscribe.Models;

public record NonTalkTimeFilter
{
    /// <summary>
    /// Specify the duration, in milliseconds, of the period of silence that you want to flag. For example, you can flag a silent period that lasts 30,000 milliseconds.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Threshold")]
    public int? Threshold { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AbsoluteTimeRange")]
    public AbsoluteTimeRange? AbsoluteTimeRange { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RelativeTimeRange")]
    public RelativeTimeRange? RelativeTimeRange { get; init; }

    /// <summary>
    /// Set to TRUE to flag periods of speech. Set to FALSE to flag periods of silence
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Negate")]
    public bool? Negate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
