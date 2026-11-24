using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record ActiveContextTimeToLive
{
    /// <summary>
    /// The number of seconds that the context is active. You can specify between 5 and 86400 seconds (24 hours).
    /// </summary>
    [JsonPropertyName("timeToLiveInSeconds")]
    public required int TimeToLiveInSeconds { get; init; }

    /// <summary>
    /// The number of turns that the context is active. You can specify up to 20 turns. Each request and response from the bot is a turn.
    /// </summary>
    [JsonPropertyName("turnsToLive")]
    public required int TurnsToLive { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
