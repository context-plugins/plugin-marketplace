using System.Collections.Generic;
using System.Text.Json.Serialization;
using OddsRelay.Core.Models;
using OddsRelay.Models.AnyOf;

namespace OddsRelay.Models;

/// <summary>
/// One fixture. Ids are opaque and stable across boards (one fixture is one id on every route), but not durable keys: a paired fixture re-keys once when a higher-ranked exchange lists it.
/// </summary>
public record MatchedEvent
{
    [JsonPropertyName("event_id")]
    public required string EventId { get; init; }

    [JsonPropertyName("sport_key")]
    public required string SportKey { get; init; }

    [JsonPropertyName("sport_title")]
    public required string SportTitle { get; init; }

    [JsonPropertyName("commence_time")]
    public required CommenceTime? CommenceTime { get; init; }

    /// <summary>
    /// Team sports.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("home_team")]
    public string? HomeTeam { get; init; }

    /// <summary>
    /// Team sports.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("away_team")]
    public string? AwayTeam { get; init; }

    /// <summary>
    /// A team fixture that does not split into sides.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("event_name")]
    public string? EventName { get; init; }

    /// <summary>
    /// Racing: the course.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("venue")]
    public string? Venue { get; init; }

    [JsonPropertyName("markets")]
    public required IReadOnlyList<Market1> Markets { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
