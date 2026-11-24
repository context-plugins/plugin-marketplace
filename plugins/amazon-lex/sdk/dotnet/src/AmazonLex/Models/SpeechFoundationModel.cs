using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record SpeechFoundationModel
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the foundation model used for speech processing.
    /// </summary>
    [JsonPropertyName("modelArn")]
    public required string ModelArn { get; init; }

    /// <summary>
    /// The identifier of the voice to use for speech synthesis with the foundation model.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("voiceId")]
    public string? VoiceId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
