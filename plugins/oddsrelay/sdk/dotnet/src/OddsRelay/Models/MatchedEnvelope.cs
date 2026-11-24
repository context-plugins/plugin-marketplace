using System.Collections.Generic;
using System.Text.Json.Serialization;
using OddsRelay.Core.Models;

namespace OddsRelay.Models;

public record MatchedEnvelope
{
    [JsonPropertyName("meta")]
    public required MatchedMeta Meta { get; init; }

    [JsonPropertyName("data")]
    public required IReadOnlyList<MatchedEvent> Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
