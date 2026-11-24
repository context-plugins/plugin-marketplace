using Hud.Models;

namespace Hud.Requests.Rollouts;

/// <summary>
/// The inputs of the RunListV2RolloutsRunListPost operation.
/// </summary>
public sealed record RunListV2RolloutsRunListPostRequest
{
    public required RolloutRunListRequest Body { get; init; }
}
