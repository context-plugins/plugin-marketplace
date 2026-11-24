using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.AnyOf;

namespace Hud.Models;

public record BuildWorkspaceListResponse
{
    [JsonPropertyName("build_id")]
    public required Guid BuildId { get; init; }

    [JsonPropertyName("path")]
    public required string Path { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("entries")]
    public IReadOnlyList<BuildSourceEntry>? Entries { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("next_cursor")]
    public NextCursor? NextCursor { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
