using Hud.Models;

namespace Hud.Requests.Rollouts;

/// <summary>
/// The inputs of the CancelJobV2RolloutsCancelJobPost operation.
/// </summary>
public sealed record CancelJobV2RolloutsCancelJobPostRequest
{
    public required CancelJobRequest Body { get; init; }
}
