using System;

namespace Hud.Requests.Builds;

/// <summary>
/// The inputs of the CancelBuildV2BuildsBuildIdCancelPost operation.
/// </summary>
public sealed record CancelBuildV2BuildsBuildIdCancelPostRequest
{
    public required Guid BuildId { get; init; }
}
