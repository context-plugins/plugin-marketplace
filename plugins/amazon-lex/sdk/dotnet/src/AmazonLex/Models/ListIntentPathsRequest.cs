using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record ListIntentPathsRequest
{
    /// <summary>
    /// The identifier for the bot for which you want to retrieve intent path metrics.
    /// </summary>
    [JsonPropertyName("botId")]
    public required string BotId { get; init; }

    /// <summary>
    /// The date and time that marks the beginning of the range of time for which you want to see intent path metrics.
    /// </summary>
    [JsonPropertyName("startDateTime")]
    public required DateTimeOffset StartDateTime { get; init; }

    /// <summary>
    /// The date and time that marks the end of the range of time for which you want to see intent path metrics.
    /// </summary>
    [JsonPropertyName("endDateTime")]
    public required DateTimeOffset EndDateTime { get; init; }

    /// <summary>
    /// The intent path for which you want to retrieve metrics. Use a forward slash to separate intents in the path. For example: /BookCar /BookCar/BookHotel /BookHotel/BookCar
    /// </summary>
    [JsonPropertyName("intentPath")]
    public required string IntentPath { get; init; }

    /// <summary>
    /// A list of objects, each describes a condition by which you want to filter the results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filters")]
    public IReadOnlyList<AnalyticsPathFilter>? Filters { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
