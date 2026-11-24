using System;
using Deliverd.Models;

namespace Deliverd.Requests.Tasks;

/// <summary>
/// The inputs of the PostApiV1TasksByIdGovernanceEvidence operation.
/// </summary>
public sealed record PostApiV1TasksByIdGovernanceEvidenceRequest
{
    public required Guid Id { get; init; }

    public ApiV1TasksGovernanceEvidenceRequest? Body { get; init; }
}
