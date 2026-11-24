using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record SpendLimitListResponse
{
    [JsonPropertyName("limits")]
    public required IReadOnlyList<SpendLimitItem> Limits { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
