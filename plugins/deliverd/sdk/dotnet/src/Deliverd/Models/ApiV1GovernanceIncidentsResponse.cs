using System.Collections.Generic;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1GovernanceIncidentsResponse
{
    [JsonPropertyName("items")]
    public required IReadOnlyList<Item> Items { get; init; }

    [JsonPropertyName("nextCursor")]
    public required string? NextCursor { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
