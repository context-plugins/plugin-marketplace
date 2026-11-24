using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;

namespace AmazonTranscribe.Models;

public record GetMedicalTranscriptionJobRequest
{
    /// <summary>
    /// The name of the medical transcription job you want information about. Job names are case sensitive.
    /// </summary>
    [JsonPropertyName("MedicalTranscriptionJobName")]
    public required string MedicalTranscriptionJobName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
