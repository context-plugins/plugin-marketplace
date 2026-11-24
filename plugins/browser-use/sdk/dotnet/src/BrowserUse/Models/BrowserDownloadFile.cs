using System;
using System.Text.Json.Serialization;
using BrowserUse.Core.Models;
using BrowserUse.Models.AnyOf;

namespace BrowserUse.Models;

/// <summary>
/// A single file the browser downloaded during the session.
/// </summary>
public record BrowserDownloadFile
{
    /// <summary>
    /// File name (basename relative to the session downloads prefix)
    /// </summary>
    [JsonPropertyName("path")]
    public required string Path { get; init; }

    /// <summary>
    /// File size in bytes
    /// </summary>
    [JsonPropertyName("size")]
    public required int Size { get; init; }

    /// <summary>
    /// When the file was last modified in S3
    /// </summary>
    [JsonPropertyName("lastModified")]
    public required DateTimeOffset LastModified { get; init; }

    /// <summary>
    /// Presigned download URL (15 min expiry). Only included when <c>includeUrls=true</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    public Url? Url { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
