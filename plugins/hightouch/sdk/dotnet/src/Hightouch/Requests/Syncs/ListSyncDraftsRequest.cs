using System;
using Hightouch.Models.Enums;

namespace Hightouch.Requests.Syncs;

/// <summary>
/// The inputs of the ListSyncDrafts operation.
/// </summary>
public sealed record ListSyncDraftsRequest
{
    /// <summary>
    /// filter on the draft's status (default <c>pending</c>)
    /// </summary>
    public SyncDraftStatus? Status { get; init; }

    /// <summary>
    /// only drafts for this sync
    /// </summary>
    public double? SyncId { get; init; }

    /// <summary>
    /// only drafts changed at or after this ISO timestamp
    /// </summary>
    public DateTimeOffset? UpdatedSince { get; init; }

    /// <summary>
    /// the most drafts to return on a page, from 1 to 100 (default 100)
    /// </summary>
    public double Limit { get; init; } = 100d;

    /// <summary>
    /// the <c>nextCursor</c> from the previous page
    /// </summary>
    public string? Cursor { get; init; }
}
