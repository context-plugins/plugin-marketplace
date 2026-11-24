using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.AnyOf;

namespace Hud.Models;

public record ValidationError
{
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    [JsonPropertyName("loc")]
    public required IReadOnlyList<Location> Loc { get; init; }

    [JsonPropertyName("msg")]
    public required string Msg { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
