using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record TranscribestreamingMedicalScribeChannelDefinition
{
    /// <summary>
    /// Specify the audio channel you want to define.
    /// </summary>
    [JsonPropertyName("ChannelId")]
    public required int ChannelId { get; init; }

    /// <summary>
    /// Specify the participant that you want to flag. The allowed options are CLINICIAN and PATIENT.
    /// </summary>
    [JsonPropertyName("ParticipantRole")]
    public required ParticipantRole2 ParticipantRole { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
