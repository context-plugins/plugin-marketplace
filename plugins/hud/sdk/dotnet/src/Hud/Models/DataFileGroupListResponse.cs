using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record DataFileGroupListResponse
{
    [JsonPropertyName("groups")]
    public required IReadOnlyList<DataFileGroup> Groups { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
