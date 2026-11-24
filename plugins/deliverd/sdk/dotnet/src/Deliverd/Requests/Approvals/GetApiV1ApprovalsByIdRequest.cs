using System;

namespace Deliverd.Requests.Approvals;

/// <summary>
/// The inputs of the GetApiV1ApprovalsById operation.
/// </summary>
public sealed record GetApiV1ApprovalsByIdRequest
{
    public required Guid Id { get; init; }
}
