using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record DeepgramSpeechModelConfig
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the Secrets Manager secret that contains the Deepgram API token.
    /// </summary>
    [JsonPropertyName("apiTokenSecretArn")]
    public required string ApiTokenSecretArn { get; init; }

    /// <summary>
    /// The identifier of the Deepgram speech-to-text model to use for processing speech input.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("modelId")]
    public string? ModelId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
