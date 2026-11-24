using Hightouch.Models;

namespace Hightouch.Requests.Syncs;

/// <summary>
/// The inputs of the RejectSyncDraft operation.
/// </summary>
public sealed record RejectSyncDraftRequest
{
    /// <summary>
    /// The id of the sync
    /// </summary>
    public required double SyncId { get; init; }

    /// <summary>
    /// The id of the draft
    /// </summary>
    public required string DraftId { get; init; }

    public required RejectSyncDraftInput Body { get; init; }
}
