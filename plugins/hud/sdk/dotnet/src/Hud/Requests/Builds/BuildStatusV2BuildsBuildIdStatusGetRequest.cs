using System;

namespace Hud.Requests.Builds;

/// <summary>
/// The inputs of the BuildStatusV2BuildsBuildIdStatusGet operation.
/// </summary>
public sealed record BuildStatusV2BuildsBuildIdStatusGetRequest
{
    public required Guid BuildId { get; init; }
}
