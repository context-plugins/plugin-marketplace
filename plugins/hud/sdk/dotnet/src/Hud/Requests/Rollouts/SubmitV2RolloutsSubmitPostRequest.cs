using Hud.Models;

namespace Hud.Requests.Rollouts;

/// <summary>
/// The inputs of the SubmitV2RolloutsSubmitPost operation.
/// </summary>
public sealed record SubmitV2RolloutsSubmitPostRequest
{
    public required RolloutSubmitRequest Body { get; init; }
}
