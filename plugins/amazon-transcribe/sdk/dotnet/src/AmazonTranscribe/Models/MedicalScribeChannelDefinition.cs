using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record MedicalScribeChannelDefinition
{
    /// <summary>
    /// Specify the audio channel you want to define.
    /// </summary>
    [JsonPropertyName("ChannelId")]
    public required int ChannelId { get; init; }

    /// <summary>
    /// Specify the participant that you want to flag. The options are CLINICIAN and PATIENT
    /// </summary>
    [JsonPropertyName("ParticipantRole")]
    public required ParticipantRoleAmazonTranscribeServiceMedicalScribeJobApi ParticipantRole { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
