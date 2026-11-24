using System.Collections.Generic;
using System.Text.Json.Serialization;
using OddsRelay.Core.Models;
using OddsRelay.Models.AnyOf;
using OddsRelay.Models.Enums;

namespace OddsRelay.Models;

public record Event
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

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

    [JsonPropertyName("status")]
    public required StatusOddsRelayDiscoveryApi Status { get; init; }

    /// <summary>
    /// The matched boards carrying it.
    /// </summary>
    [JsonPropertyName("has_coverage")]
    public required IReadOnlyList<string> HasCoverage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
