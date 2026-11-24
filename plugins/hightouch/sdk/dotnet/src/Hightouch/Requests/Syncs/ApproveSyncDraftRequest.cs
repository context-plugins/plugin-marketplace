using Hightouch.Models;

namespace Hightouch.Requests.Syncs;

/// <summary>
/// The inputs of the ApproveSyncDraft operation.
/// </summary>
public sealed record ApproveSyncDraftRequest
{
    /// <summary>
    /// The id of the sync
    /// </summary>
    public required double SyncId { get; init; }

    /// <summary>
    /// The id of the draft
    /// </summary>
    public required string DraftId { get; init; }

    public required ApproveSyncDraftInput Body { get; init; }
}
