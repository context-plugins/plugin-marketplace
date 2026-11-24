using System;

namespace Hud.Requests.Jobs;

/// <summary>
/// The inputs of the RevalidateJobV2JobsJobIdRevalidatePost operation.
/// </summary>
public sealed record RevalidateJobV2JobsJobIdRevalidatePostRequest
{
    public required Guid JobId { get; init; }
}
