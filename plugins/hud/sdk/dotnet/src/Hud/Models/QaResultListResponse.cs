using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record QaResultListResponse
{
    [JsonPropertyName("results")]
    public required IReadOnlyList<QaResultResponse> Results { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
