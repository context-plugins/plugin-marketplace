using System.Collections.Generic;
using System.Text.Json.Serialization;
using BrowserUse.Core.Models;
using BrowserUse.Models.AnyOf;

namespace BrowserUse.Models;

/// <summary>
/// Paginated list of browser downloads with optional presigned URLs.
/// </summary>
public record BrowserDownloadListResponse
{
    /// <summary>
    /// List of files downloaded by the browser
    /// </summary>
    [JsonPropertyName("files")]
    public required IReadOnlyList<BrowserDownloadFile> Files { get; init; }

    /// <summary>
    /// Cursor for the next page. Pass as the <c>cursor</c> query parameter to fetch the next page.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextCursor")]
    public Nextcursor? NextCursor { get; init; }

    /// <summary>
    /// Whether there are more files beyond this page.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hasMore")]
    public bool? HasMore { get; init; } = false;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
