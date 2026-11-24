using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record ModelsLexOutputContext
{
    /// <summary>
    /// The name of the context.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The number of seconds that the context should be active after it is first sent in a PostContent or PostText response. You can set the value between 5 and 86,400 seconds (24 hours).
    /// </summary>
    [JsonPropertyName("timeToLiveInSeconds")]
    public required int TimeToLiveInSeconds { get; init; }

    /// <summary>
    /// The number of conversation turns that the context should be active. A conversation turn is one PostContent or PostText request and the corresponding response from Amazon Lex.
    /// </summary>
    [JsonPropertyName("turnsToLive")]
    public required int TurnsToLive { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
