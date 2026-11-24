using System.Collections.Generic;
using System.Text.Json.Serialization;
using RelmCrm.Core.Models;

namespace RelmCrm.Models;

public record PipelinesStagesReorderRequest
{
    [JsonPropertyName("order")]
    public required IReadOnlyList<string> Order { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
