using Deliverd.Models.Enums;

namespace Deliverd.Requests.Approvals;

/// <summary>
/// The inputs of the GetApiV1Approvals operation.
/// </summary>
public sealed record GetApiV1ApprovalsRequest
{
    public int? Limit { get; init; }

    /// <summary>
    /// nextCursor from a previous response. One we did not issue is refused.
    /// </summary>
    public string? Cursor { get; init; }

    public Status1? Status { get; init; }

    public string? ExternalId { get; init; }

    /// <summary>
    /// The requests naming one person: a member's id or email, or an admitted guest's email. An approver's inbox, for your own UI.
    /// </summary>
    public string? Approver { get; init; }
}
