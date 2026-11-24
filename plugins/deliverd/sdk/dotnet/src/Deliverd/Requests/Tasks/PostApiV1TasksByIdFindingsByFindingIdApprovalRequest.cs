using System;
using Deliverd.Models;

namespace Deliverd.Requests.Tasks;

/// <summary>
/// The inputs of the PostApiV1TasksByIdFindingsByFindingIdApproval operation.
/// </summary>
public sealed record PostApiV1TasksByIdFindingsByFindingIdApprovalRequest
{
    public required Guid Id { get; init; }

    public required Guid FindingId { get; init; }

    public ApiV1TasksFindingsApprovalRequest? Body { get; init; }
}
