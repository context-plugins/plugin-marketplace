using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record QaCheckListResponse
{
    [JsonPropertyName("checks")]
    public required IReadOnlyList<QaCheckResponse> Checks { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
