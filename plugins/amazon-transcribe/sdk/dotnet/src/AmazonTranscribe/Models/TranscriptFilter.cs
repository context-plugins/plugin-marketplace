using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record TranscriptFilter
{
    /// <summary>
    /// Flag the presence or absence of an exact match to the phrases that you specify. For example, if you specify the phrase "speak to a manager" as your Targets value, only that exact phrase is flagged. Note that semantic matching is not supported. For example, if your customer says "speak to the manager", instead of "speak to a manager", your content is not flagged.
    /// </summary>
    [JsonPropertyName("TranscriptFilterType")]
    public string TranscriptFilterType { get; } = "EXACT";

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
    /// Set to TRUE to flag the absence of the phrase that you specified in your request. Set to FALSE to flag the presence of the phrase that you specified in your request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Negate")]
    public bool? Negate { get; init; }

    /// <summary>
    /// Specify the phrases that you want to flag.
    /// </summary>
    [JsonPropertyName("Targets")]
    public required IReadOnlyList<string> Targets { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
