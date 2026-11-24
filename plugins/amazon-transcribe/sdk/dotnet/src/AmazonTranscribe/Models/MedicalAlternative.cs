using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;

namespace AmazonTranscribe.Models;

public record MedicalAlternative
{
    /// <summary>
    /// Contains transcribed text.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Transcript")]
    public string? Transcript { get; init; }

    /// <summary>
    /// Contains words, phrases, or punctuation marks in your transcription output.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Items")]
    public IReadOnlyList<MedicalItem>? Items { get; init; }

    /// <summary>
    /// Contains entities identified as personal health information (PHI) in your transcription output.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Entities")]
    public IReadOnlyList<MedicalEntity>? Entities { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
