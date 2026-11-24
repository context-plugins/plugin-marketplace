namespace Hightouch.Requests.Syncs;

/// <summary>
/// The inputs of the GetSyncDraft operation.
/// </summary>
public sealed record GetSyncDraftRequest
{
    /// <summary>
    /// The id of the sync
    /// </summary>
    public required double SyncId { get; init; }

    /// <summary>
    /// The id of the draft
    /// </summary>
    public required string DraftId { get; init; }
}
