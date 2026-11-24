using System.Collections.Generic;
using System.Text.Json.Serialization;
using OddsRelay.Core.Models;
using OddsRelay.Models.AnyOf;

namespace OddsRelay.Models;

public record Market
{
    [JsonPropertyName("key")]
    public required string Key { get; init; }

    /// <summary>
    /// When this venue's market last changed (second precision): a price, a lay price or <c>available</c> moved, or a row appeared, including a venue's rows coming back after a few seconds off the board (see the Freshness note). A service restart can also move it once with nothing changed: dedupe on content. It is not a heartbeat: a quiet venue's <c>last_update</c> ages while the venue is still read (venue freshness is <c>last_seen</c> in keyed <c>/v2/coverage</c>).
    /// </summary>
    [JsonPropertyName("last_update")]
    public required LastUpdate1? LastUpdate { get; init; }

    [JsonPropertyName("outcomes")]
    public required IReadOnlyList<RawOutcome> Outcomes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
