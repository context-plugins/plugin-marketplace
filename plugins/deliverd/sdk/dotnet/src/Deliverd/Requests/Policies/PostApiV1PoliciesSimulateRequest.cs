using Deliverd.Models;

namespace Deliverd.Requests.Policies;

/// <summary>
/// The inputs of the PostApiV1PoliciesSimulate operation.
/// </summary>
public sealed record PostApiV1PoliciesSimulateRequest
{
    public ApiV1PoliciesSimulateRequest? Body { get; init; }
}
