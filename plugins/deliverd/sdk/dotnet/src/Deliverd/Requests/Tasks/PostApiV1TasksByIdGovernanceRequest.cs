using System;
using Deliverd.Models;

namespace Deliverd.Requests.Tasks;

/// <summary>
/// The inputs of the PostApiV1TasksByIdGovernance operation.
/// </summary>
public sealed record PostApiV1TasksByIdGovernanceRequest
{
    public required Guid Id { get; init; }

    public ApiV1TasksGovernanceRequest? Body { get; init; }
}
