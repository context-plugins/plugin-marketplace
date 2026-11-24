using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record UtteranceInputSpecification
{
    /// <summary>
    /// A text input transcription of the utterance. It is only applicable for test-sets containing text data.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("textInput")]
    public string? TextInput { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("audioInput")]
    public UtteranceAudioInputSpecification? AudioInput { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
