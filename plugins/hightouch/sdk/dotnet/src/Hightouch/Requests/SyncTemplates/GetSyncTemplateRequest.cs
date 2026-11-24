namespace Hightouch.Requests.SyncTemplates;

/// <summary>
/// The inputs of the GetSyncTemplate operation.
/// </summary>
public sealed record GetSyncTemplateRequest
{
    /// <summary>
    /// The id of the sync template
    /// </summary>
    public required double SyncTemplateId { get; init; }
}
