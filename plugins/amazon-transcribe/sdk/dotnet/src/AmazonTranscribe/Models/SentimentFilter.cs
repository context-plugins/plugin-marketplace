using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record SentimentFilter
{
    /// <summary>
    /// Specify the sentiments that you want to flag.
    /// </summary>
    [JsonPropertyName("Sentiments")]
    public required IReadOnlyList<Sentiment> Sentiments { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AbsoluteTimeRange")]
    public AbsoluteTimeRange? AbsoluteTimeRange { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RelativeTimeRange")]
    public RelativeTimeRange? RelativeTimeRange { get; init; }

    /// <summary>
    /// Specify the participant that you want to flag. Omitting this parameter is equivalent to specifying both participants.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ParticipantRole")]
    public ParticipantRole1? ParticipantRole { get; init; }

    /// <summary>
    /// Set to TRUE to flag the sentiments that you didn't include in your request. Set to FALSE to flag the sentiments that you specified in your request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Negate")]
    public bool? Negate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
