using Hud.Models;

namespace Hud.Requests.Rollouts;

/// <summary>
/// The inputs of the RunV2RolloutsRunPost operation.
/// </summary>
public sealed record RunV2RolloutsRunPostRequest
{
    public required RolloutRunRequest Body { get; init; }
}
