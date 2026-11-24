using Hightouch.Models;

namespace Hightouch.Requests.SyncTemplates;

/// <summary>
/// The inputs of the CreateSyncTemplate operation.
/// </summary>
public sealed record CreateSyncTemplateRequest
{
    public required SyncTemplateCreate Body { get; init; }
}
