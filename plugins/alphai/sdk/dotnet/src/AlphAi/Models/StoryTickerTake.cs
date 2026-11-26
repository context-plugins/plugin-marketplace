using System.Text.Json.Serialization;
using AlphAi.Core.Models;
using AlphAi.Models.Enums;

namespace AlphAi.Models;

public record StoryTickerTake
{
    [JsonPropertyName("ticker")]
    public required string Ticker { get; init; }

    /// <summary>
    /// The summary's read of the event for this ticker — an editorial call, not a price label.
    /// </summary>
    [JsonPropertyName("impact")]
    public required Impact Impact { get; init; }

    /// <summary>
    /// One line on why.
    /// </summary>
    [JsonPropertyName("note")]
    public required string Note { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
