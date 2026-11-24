using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record SuggestedTasksetsResponse
{
    [JsonPropertyName("suggested")]
    public required IReadOnlyList<ModelSuggestedTaskset> Suggested { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
