using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;

namespace AmazonTranscribe.Models;

public record MedicalScribePostStreamAnalyticsSettings
{
    [JsonPropertyName("ClinicalNoteGenerationSettings")]
    public required TranscribestreamingClinicalNoteGenerationSettings ClinicalNoteGenerationSettings { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
