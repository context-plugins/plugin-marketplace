using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;

namespace AmazonTranscribe.Models;

public record StartMedicalTranscriptionJobResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MedicalTranscriptionJob")]
    public MedicalTranscriptionJob? MedicalTranscriptionJob { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
