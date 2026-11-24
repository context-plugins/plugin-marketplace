using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record ApiV1CallsStatisticsResponse
{
    /// <summary>
    /// Statistics for placed (outgoing) calls
    /// </summary>
    [JsonPropertyName("placed")]
    public required Placed Placed { get; init; }

    /// <summary>
    /// Statistics for received (incoming) calls
    /// </summary>
    [JsonPropertyName("received")]
    public required Received Received { get; init; }

    /// <summary>
    /// Statistics for missed calls
    /// </summary>
    [JsonPropertyName("missed")]
    public required Missed1 Missed { get; init; }

    /// <summary>
    /// Combined statistics for all calls
    /// </summary>
    [JsonPropertyName("all")]
    public required All All { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
