using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Hightouch.Models;

public record SyncDraftList
{
    [JsonPropertyName("data")]
    public required IReadOnlyList<SyncDraft> Data { get; init; }

    /// <summary>
    /// Pass as <c>cursor</c> to read the next page; null on the last page. A page can
    /// hold fewer than <c>limit</c> drafts and still have a next page.
    /// </summary>
    [JsonPropertyName("nextCursor")]
    public required string? NextCursor { get; init; }
}
