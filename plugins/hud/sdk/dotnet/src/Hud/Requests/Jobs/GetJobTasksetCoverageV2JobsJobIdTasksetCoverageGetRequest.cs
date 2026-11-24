using System;

namespace Hud.Requests.Jobs;

/// <summary>
/// The inputs of the GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGet operation.
/// </summary>
public sealed record GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGetRequest
{
    public required Guid JobId { get; init; }
}
