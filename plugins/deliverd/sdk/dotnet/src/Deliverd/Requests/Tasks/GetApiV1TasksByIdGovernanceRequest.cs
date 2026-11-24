using System;

namespace Deliverd.Requests.Tasks;

/// <summary>
/// The inputs of the GetApiV1TasksByIdGovernance operation.
/// </summary>
public sealed record GetApiV1TasksByIdGovernanceRequest
{
    public required Guid Id { get; init; }
}
