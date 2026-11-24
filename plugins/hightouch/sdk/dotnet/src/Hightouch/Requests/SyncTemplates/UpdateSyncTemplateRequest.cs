using Hightouch.Models;

namespace Hightouch.Requests.SyncTemplates;

/// <summary>
/// The inputs of the UpdateSyncTemplate operation.
/// </summary>
public sealed record UpdateSyncTemplateRequest
{
    /// <summary>
    /// The sync template's ID
    /// </summary>
    public required double SyncTemplateId { get; init; }

    public required SyncTemplateUpdate Body { get; init; }
}
