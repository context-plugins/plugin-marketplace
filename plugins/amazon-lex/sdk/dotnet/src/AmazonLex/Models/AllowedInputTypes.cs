using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record AllowedInputTypes
{
    /// <summary>
    /// Indicates whether audio input is allowed.
    /// </summary>
    [JsonPropertyName("allowAudioInput")]
    public required bool AllowAudioInput { get; init; }

    /// <summary>
    /// Indicates whether DTMF input is allowed.
    /// </summary>
    [JsonPropertyName("allowDTMFInput")]
    public required bool AllowDtmfInput { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
