using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record ChannelDefinition
{
    /// <summary>
    /// Specify the audio channel you want to define.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ChannelId")]
    public int? ChannelId { get; init; }

    /// <summary>
    /// Specify the speaker you want to define. Omitting this parameter is equivalent to specifying both participants.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ParticipantRole")]
    public ParticipantRoleAmazonTranscribeServiceCallAnalyticsJobApi? ParticipantRole { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
