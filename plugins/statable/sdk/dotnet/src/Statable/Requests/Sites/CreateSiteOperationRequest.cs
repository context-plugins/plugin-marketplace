using Statable.Models;

namespace Statable.Requests.Sites;

/// <summary>
/// The inputs of the CreateSite operation.
/// </summary>
public sealed record CreateSiteOperationRequest
{
    /// <summary>
    /// Replays the stored response for 24 hours instead of creating a second site. Reuse with a different body is 409 <c>idempotency_conflict</c>.
    /// </summary>
    public string? IdempotencyKey { get; init; }

    public required CreateSiteRequest Body { get; init; }
}
