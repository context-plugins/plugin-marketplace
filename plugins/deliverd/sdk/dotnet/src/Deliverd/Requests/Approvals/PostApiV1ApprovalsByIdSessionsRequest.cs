using System;
using Deliverd.Models;

namespace Deliverd.Requests.Approvals;

/// <summary>
/// The inputs of the PostApiV1ApprovalsByIdSessions operation.
/// </summary>
public sealed record PostApiV1ApprovalsByIdSessionsRequest
{
    public required Guid Id { get; init; }

    public ApiV1ApprovalsSessionsRequest? Body { get; init; }
}
