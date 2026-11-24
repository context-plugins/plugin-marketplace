using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;

namespace AmazonTranscribe.Models;

/// <summary>
/// Exactly one member is set.
/// </summary>
public record MedicalScribeInputStream
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AudioEvent")]
    public MedicalScribeAudioEvent? AudioEvent { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SessionControlEvent")]
    public MedicalScribeSessionControlEvent? SessionControlEvent { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ConfigurationEvent")]
    public MedicalScribeConfigurationEvent? ConfigurationEvent { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
