using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record ImportFormatListResponse
{
    [JsonPropertyName("formats")]
    public required IReadOnlyList<ImportFormatResponse> Formats { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
