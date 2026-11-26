using System.Text.Json.Serialization;
using EinsteinBots.Models.Enums;

namespace EinsteinBots.Models;

public record NormalizedIntent
{
    /// <summary>
    /// Name or ID of the intent.
    /// </summary>
    [JsonPropertyName("label")]
    public required string Label { get; init; }

    /// <summary>
    /// Probability number that the AI assigns to this intent.
    /// </summary>
    [JsonPropertyName("confidenceScore")]
    public required double ConfidenceScore { get; init; }

    /// <summary>
    /// Prediction system that detects the intent.
    /// <list type="bullet">
    ///   <item><description><c>DIRECT</c>—Utterance search or an exact match</description></item>
    ///   <item><description><c>CORE_NLP</c>—Third-party Natural Language Processing (NLP)</description></item>
    ///   <item><description><c>EINSTEIN_NLP</c>—Einstein NLP</description></item>
    /// </list>
    /// </summary>
    [JsonPropertyName("intentSource")]
    public required IntentSource IntentSource { get; init; }
}
