using System;

namespace Hud.Requests.Jobs;

/// <summary>
/// The inputs of the GetJobV2JobsJobIdGet operation.
/// </summary>
public sealed record GetJobV2JobsJobIdGetRequest
{
    public required Guid JobId { get; init; }
}
