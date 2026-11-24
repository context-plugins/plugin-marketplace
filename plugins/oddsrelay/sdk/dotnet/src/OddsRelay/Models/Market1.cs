using System.Collections.Generic;
using System.Text.Json.Serialization;
using OddsRelay.Core.Models;

namespace OddsRelay.Models;

public record Market1
{
    [JsonPropertyName("key")]
    public required string Key { get; init; }

    [JsonPropertyName("outcomes")]
    public required IReadOnlyList<MatchedOutcome> Outcomes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
