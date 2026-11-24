using System;
using Deliverd.Models;

namespace Deliverd.Requests.Tasks;

/// <summary>
/// The inputs of the PostApiV1TasksByIdGovernanceControlsByKeyApproval operation.
/// </summary>
public sealed record PostApiV1TasksByIdGovernanceControlsByKeyApprovalRequest
{
    public required Guid Id { get; init; }

    public required string Key { get; init; }

    public ApiV1TasksGovernanceControlsApprovalRequest? Body { get; init; }
}
