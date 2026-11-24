using System.Collections.Generic;
using System.Text.Json.Serialization;
using OddsRelay.Core.Models;
using OddsRelay.Models.AnyOf;

namespace OddsRelay.Models;

public record RawEvent
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("cluster_id")]
    public required string? ClusterId { get; init; }

    [JsonPropertyName("sport_key")]
    public required string SportKey { get; init; }

    [JsonPropertyName("sport_title")]
    public required string SportTitle { get; init; }

    [JsonPropertyName("commence_time")]
    public required CommenceTime? CommenceTime { get; init; }

    [JsonPropertyName("home_team")]
    public required string? HomeTeam { get; init; }

    [JsonPropertyName("away_team")]
    public required string? AwayTeam { get; init; }

    [JsonPropertyName("bookmakers")]
    public required IReadOnlyList<Bookmaker> Bookmakers { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
