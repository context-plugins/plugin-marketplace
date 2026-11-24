using System;

namespace Hud.Requests.Jobs;

/// <summary>
/// The inputs of the InvalidateJobV2JobsJobIdInvalidatePost operation.
/// </summary>
public sealed record InvalidateJobV2JobsJobIdInvalidatePostRequest
{
    public required Guid JobId { get; init; }
}
