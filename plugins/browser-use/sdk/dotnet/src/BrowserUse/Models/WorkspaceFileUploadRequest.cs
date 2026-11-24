using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using BrowserUse.Core.Models;

namespace BrowserUse.Models;

public record WorkspaceFileUploadRequest
{
    [JsonPropertyName("files")]
    [MinLength(1)]
    [MaxLength(10)]
    public required IReadOnlyList<WorkspaceFileUploadItem> Files { get; init; }

    /// <summary>
    /// When false, return 409 before reserving storage if any uploaded filename would replace an existing workspace file.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("allowOverrides")]
    public bool? AllowOverrides { get; init; } = true;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
