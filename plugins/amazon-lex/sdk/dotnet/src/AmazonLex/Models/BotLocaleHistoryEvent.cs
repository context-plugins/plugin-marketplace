using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record BotLocaleHistoryEvent
{
    /// <summary>
    /// A description of the event that occurred.
    /// </summary>
    [JsonPropertyName("event")]
    public required string Event { get; init; }

    /// <summary>
    /// A timestamp of the date and time that the event occurred.
    /// </summary>
    [JsonPropertyName("eventDate")]
    public required DateTimeOffset EventDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
