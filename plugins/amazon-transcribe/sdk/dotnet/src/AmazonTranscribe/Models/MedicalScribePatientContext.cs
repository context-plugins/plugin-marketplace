using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record MedicalScribePatientContext
{
    /// <summary>
    /// The patient's preferred pronouns that the user wants to provide as a context for clinical note generation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Pronouns")]
    public Pronouns? Pronouns { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
