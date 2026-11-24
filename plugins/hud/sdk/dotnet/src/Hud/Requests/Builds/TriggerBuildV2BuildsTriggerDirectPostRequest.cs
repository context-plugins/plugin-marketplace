using Hud.Models;

namespace Hud.Requests.Builds;

/// <summary>
/// The inputs of the TriggerBuildV2BuildsTriggerDirectPost operation.
/// </summary>
public sealed record TriggerBuildV2BuildsTriggerDirectPostRequest
{
    public required BuildTriggerRequest Body { get; init; }
}
