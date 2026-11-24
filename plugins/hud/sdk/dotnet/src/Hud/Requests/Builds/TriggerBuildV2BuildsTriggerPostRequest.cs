using Hud.Models;

namespace Hud.Requests.Builds;

/// <summary>
/// The inputs of the TriggerBuildV2BuildsTriggerPost operation.
/// </summary>
public sealed record TriggerBuildV2BuildsTriggerPostRequest
{
    public required BuildTriggerRequest Body { get; init; }
}
