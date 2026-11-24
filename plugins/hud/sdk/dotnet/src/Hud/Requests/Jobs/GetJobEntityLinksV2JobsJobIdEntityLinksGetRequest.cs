using System;

namespace Hud.Requests.Jobs;

/// <summary>
/// The inputs of the GetJobEntityLinksV2JobsJobIdEntityLinksGet operation.
/// </summary>
public sealed record GetJobEntityLinksV2JobsJobIdEntityLinksGetRequest
{
    public required Guid JobId { get; init; }
}
