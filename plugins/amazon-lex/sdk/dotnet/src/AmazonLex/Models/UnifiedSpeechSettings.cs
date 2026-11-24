using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record UnifiedSpeechSettings
{
    [JsonPropertyName("speechFoundationModel")]
    public required SpeechFoundationModel SpeechFoundationModel { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
