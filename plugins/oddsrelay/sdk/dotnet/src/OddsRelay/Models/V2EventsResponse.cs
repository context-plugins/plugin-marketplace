using System.Collections.Generic;
using System.Text.Json.Serialization;
using OddsRelay.Core.Models;

namespace OddsRelay.Models;

public record V2EventsResponse
{
    [JsonPropertyName("meta")]
    public required PageMeta Meta { get; init; }

    [JsonPropertyName("data")]
    public required IReadOnlyList<Event> Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
