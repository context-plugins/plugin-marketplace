using System;

namespace Deliverd.Requests.GovernanceApi;

/// <summary>
/// The inputs of the GetApiV1GovernanceFrameworksMapping operation.
/// </summary>
public sealed record GetApiV1GovernanceFrameworksMappingRequest
{
    public Guid? TaskId { get; init; }

    public string? Framework { get; init; }
}
