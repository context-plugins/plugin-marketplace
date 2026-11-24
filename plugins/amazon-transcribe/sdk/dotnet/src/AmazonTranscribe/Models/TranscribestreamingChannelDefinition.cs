using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record TranscribestreamingChannelDefinition
{
    /// <summary>
    /// Specify the audio channel you want to define.
    /// </summary>
    [JsonPropertyName("ChannelId")]
    public required int ChannelId { get; init; }

    /// <summary>
    /// Specify the speaker you want to define. Omitting this parameter is equivalent to specifying both participants.
    /// </summary>
    [JsonPropertyName("ParticipantRole")]
    public required ParticipantRoleAmazonTranscribeServiceCallAnalyticsJobApi ParticipantRole { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
