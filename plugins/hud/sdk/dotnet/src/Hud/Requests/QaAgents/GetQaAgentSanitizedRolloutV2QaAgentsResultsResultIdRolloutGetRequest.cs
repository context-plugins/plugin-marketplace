using System;
using Hud.Core.Validation.Attributes;

namespace Hud.Requests.QaAgents;

/// <summary>
/// The inputs of the GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGet operation.
/// </summary>
public sealed record GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetRequest
{
    public required Guid ResultId { get; init; }

    [Minimum(-1)]
    public int SinceSeq { get; init; } = -1;

    [Minimum(1)]
    [Maximum(200)]
    public int Limit { get; init; } = 100;
}
