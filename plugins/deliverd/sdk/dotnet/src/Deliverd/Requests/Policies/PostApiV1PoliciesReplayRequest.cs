using Deliverd.Models;

namespace Deliverd.Requests.Policies;

/// <summary>
/// The inputs of the PostApiV1PoliciesReplay operation.
/// </summary>
public sealed record PostApiV1PoliciesReplayRequest
{
    public ApiV1PoliciesReplayRequest? Body { get; init; }
}
