using System;
using Hud.Models;

namespace Hud.Requests.Jobs;

/// <summary>
/// The inputs of the UpdateJobV2JobsJobIdPatch operation.
/// </summary>
public sealed record UpdateJobV2JobsJobIdPatchRequest
{
    public required Guid JobId { get; init; }

    public required JobUpdateRequest Body { get; init; }
}
