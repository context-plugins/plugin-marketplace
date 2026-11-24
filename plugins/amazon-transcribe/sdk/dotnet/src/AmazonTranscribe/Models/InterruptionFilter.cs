using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record InterruptionFilter
{
    /// <summary>
    /// Specify the duration of the interruptions in milliseconds. For example, you can flag speech that contains more than 10,000 milliseconds of interruptions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Threshold")]
    public int? Threshold { get; init; }

    /// <summary>
    /// Specify the interrupter that you want to flag. Omitting this parameter is equivalent to specifying both participants.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ParticipantRole")]
    public ParticipantRole? ParticipantRole { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AbsoluteTimeRange")]
    public AbsoluteTimeRange? AbsoluteTimeRange { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RelativeTimeRange")]
    public RelativeTimeRange? RelativeTimeRange { get; init; }

    /// <summary>
    /// Set to TRUE to flag speech that does not contain interruptions. Set to FALSE to flag speech that contains interruptions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Negate")]
    public bool? Negate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
