using System;
using Deliverd.Models;

namespace Deliverd.Requests.Tasks;

/// <summary>
/// The inputs of the PatchApiV1TasksByIdGovernance operation.
/// </summary>
public sealed record PatchApiV1TasksByIdGovernanceRequest
{
    public required Guid Id { get; init; }

    public ApiV1TasksGovernanceRequest1? Body { get; init; }
}
