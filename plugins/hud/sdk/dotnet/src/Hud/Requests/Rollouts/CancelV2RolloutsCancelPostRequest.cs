using Hud.Models;

namespace Hud.Requests.Rollouts;

/// <summary>
/// The inputs of the CancelV2RolloutsCancelPost operation.
/// </summary>
public sealed record CancelV2RolloutsCancelPostRequest
{
    public required CancelRequest Body { get; init; }
}
