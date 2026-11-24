using System;
using Deliverd.Models;

namespace Deliverd.Requests.Playbooks;

/// <summary>
/// The inputs of the PostApiV1PlaybooksByIdApproval operation.
/// </summary>
public sealed record PostApiV1PlaybooksByIdApprovalRequest
{
    public required Guid Id { get; init; }

    public ApiV1PlaybooksApprovalRequest? Body { get; init; }
}
