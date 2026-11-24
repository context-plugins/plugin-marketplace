using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record BuildListResponse
{
    [JsonPropertyName("builds")]
    public required IReadOnlyList<BuildResponse> Builds { get; init; }

    [JsonPropertyName("total")]
    public required int Total { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
