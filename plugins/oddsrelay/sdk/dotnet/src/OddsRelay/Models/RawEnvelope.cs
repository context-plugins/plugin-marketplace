using System.Collections.Generic;
using System.Text.Json.Serialization;
using OddsRelay.Core.Models;

namespace OddsRelay.Models;

public record RawEnvelope
{
    [JsonPropertyName("meta")]
    public required RawMeta Meta { get; init; }

    [JsonPropertyName("data")]
    public required IReadOnlyList<RawEvent> Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
