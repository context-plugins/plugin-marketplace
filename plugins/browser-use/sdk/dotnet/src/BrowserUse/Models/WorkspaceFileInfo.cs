using System;
using System.Text.Json.Serialization;
using BrowserUse.Core.Models;
using BrowserUse.Models.AnyOf;

namespace BrowserUse.Models;

/// <summary>
/// A file the agent has produced for the workspace. Shape mirrors V3
/// files (FileInfo) so a single UI component can render both.
/// </summary>
public record WorkspaceFileInfo
{
    /// <summary>
    /// File path relative to the workspace root
    /// </summary>
    [JsonPropertyName("path")]
    public required string Path { get; init; }

    /// <summary>
    /// File size in bytes
    /// </summary>
    [JsonPropertyName("size")]
    public required int Size { get; init; }

    /// <summary>
    /// When the file was last modified
    /// </summary>
    [JsonPropertyName("lastModified")]
    public required DateTimeOffset LastModified { get; init; }

    /// <summary>
    /// Presigned download URL (60s expiry). Only included when <c>includeUrls=true</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    public Url? Url { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
