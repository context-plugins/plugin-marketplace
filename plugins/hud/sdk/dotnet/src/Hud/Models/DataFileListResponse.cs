using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record DataFileListResponse
{
    [JsonPropertyName("files")]
    public required IReadOnlyList<DataFileResponse> Files { get; init; }

    [JsonPropertyName("total")]
    public required int Total { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
