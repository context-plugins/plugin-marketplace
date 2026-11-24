using System;

namespace Deliverd.Requests.Approvals;

/// <summary>
/// The inputs of the PostApiV1ApprovalsByIdCancel operation.
/// </summary>
public sealed record PostApiV1ApprovalsByIdCancelRequest
{
    public required Guid Id { get; init; }
}
