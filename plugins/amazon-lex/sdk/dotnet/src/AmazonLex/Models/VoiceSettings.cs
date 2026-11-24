using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record VoiceSettings
{
    /// <summary>
    /// Indicates the type of Amazon Polly voice that Amazon Lex should use for voice interaction with the user. For more information, see the engine parameter of the SynthesizeSpeech operation in the Amazon Polly developer guide. If you do not specify a value, the default is standard.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("engine")]
    public Engine? Engine { get; init; }

    /// <summary>
    /// The identifier of the Amazon Polly voice to use.
    /// </summary>
    [JsonPropertyName("voiceId")]
    public required string VoiceId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
