using System.Collections.Generic;
using System.Text.Json.Serialization;
using BrowserUse.Core.Models;

namespace BrowserUse.Models;

public record WorkspaceFileUploadResponse
{
    [JsonPropertyName("files")]
    public required IReadOnlyList<WorkspaceFileUploadResponseItem> Files { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
