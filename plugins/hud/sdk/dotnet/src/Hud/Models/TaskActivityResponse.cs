using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record TaskActivityResponse
{
    [JsonPropertyName("events")]
    public required IReadOnlyList<TaskActivityEvent> Events { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
