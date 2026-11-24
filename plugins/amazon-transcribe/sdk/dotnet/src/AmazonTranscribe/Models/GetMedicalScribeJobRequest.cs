using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;

namespace AmazonTranscribe.Models;

public record GetMedicalScribeJobRequest
{
    /// <summary>
    /// The name of the Medical Scribe job you want information about. Job names are case sensitive.
    /// </summary>
    [JsonPropertyName("MedicalScribeJobName")]
    public required string MedicalScribeJobName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
