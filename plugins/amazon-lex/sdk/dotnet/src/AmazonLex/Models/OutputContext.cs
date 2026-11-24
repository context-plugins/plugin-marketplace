using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record OutputContext
{
    /// <summary>
    /// The name of the output context.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The amount of time, in seconds, that the output context should remain active. The time is figured from the first time the context is sent to the user.
    /// </summary>
    [JsonPropertyName("timeToLiveInSeconds")]
    public required int TimeToLiveInSeconds { get; init; }

    /// <summary>
    /// The number of conversation turns that the output context should remain active. The number of turns is counted from the first time that the context is sent to the user.
    /// </summary>
    [JsonPropertyName("turnsToLive")]
    public required int TurnsToLive { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
