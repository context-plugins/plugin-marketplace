using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record SpeakerDiarizationSettings
{
    /// <summary>
    /// Specifies whether speaker diarization is enabled for the bot locale. Set to true to have Amazon Lex treat speech from speakers other than the primary speaker as non-speech. Set to false to disable speaker diarization and rely on voice activity detection alone.
    /// </summary>
    [JsonPropertyName("enabled")]
    public required bool Enabled { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
