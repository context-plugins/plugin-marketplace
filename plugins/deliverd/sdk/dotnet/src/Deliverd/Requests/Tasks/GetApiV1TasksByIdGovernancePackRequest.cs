using System;

namespace Deliverd.Requests.Tasks;

/// <summary>
/// The inputs of the GetApiV1TasksByIdGovernancePack operation.
/// </summary>
public sealed record GetApiV1TasksByIdGovernancePackRequest
{
    public required Guid Id { get; init; }
}
