using System;

namespace Hud.Requests.Jobs;

/// <summary>
/// The inputs of the GetJobUsageV2JobsJobIdUsageGet operation.
/// </summary>
public sealed record GetJobUsageV2JobsJobIdUsageGetRequest
{
    public required Guid JobId { get; init; }
}
