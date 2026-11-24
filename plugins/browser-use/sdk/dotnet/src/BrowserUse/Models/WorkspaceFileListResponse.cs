using System.Collections.Generic;
using System.Text.Json.Serialization;
using BrowserUse.Core.Models;
using BrowserUse.Models.AnyOf;

namespace BrowserUse.Models;

public record WorkspaceFileListResponse
{
    [JsonPropertyName("files")]
    public required IReadOnlyList<WorkspaceFileInfo> Files { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextCursor")]
    public Nextcursor? NextCursor { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hasMore")]
    public bool? HasMore { get; init; } = false;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
