using Hud.Models;

namespace Hud.Requests.Instances;

/// <summary>
/// The inputs of the StopInstancesV2InstanceStopPost operation.
/// </summary>
public sealed record StopInstancesV2InstanceStopPostRequest
{
    public required StopInstancesRequest Body { get; init; }
}
