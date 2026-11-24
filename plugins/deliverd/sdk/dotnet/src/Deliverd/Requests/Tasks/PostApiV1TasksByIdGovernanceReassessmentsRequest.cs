using System;
using Deliverd.Models;

namespace Deliverd.Requests.Tasks;

/// <summary>
/// The inputs of the PostApiV1TasksByIdGovernanceReassessments operation.
/// </summary>
public sealed record PostApiV1TasksByIdGovernanceReassessmentsRequest
{
    public required Guid Id { get; init; }

    public ApiV1TasksGovernanceReassessmentsRequest? Body { get; init; }
}
