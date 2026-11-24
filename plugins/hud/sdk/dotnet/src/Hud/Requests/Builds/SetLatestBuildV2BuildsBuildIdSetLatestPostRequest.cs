using System;

namespace Hud.Requests.Builds;

/// <summary>
/// The inputs of the SetLatestBuildV2BuildsBuildIdSetLatestPost operation.
/// </summary>
public sealed record SetLatestBuildV2BuildsBuildIdSetLatestPostRequest
{
    public required Guid BuildId { get; init; }
}
