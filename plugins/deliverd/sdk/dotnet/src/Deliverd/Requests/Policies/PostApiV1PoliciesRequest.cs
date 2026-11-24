using Deliverd.Models;

namespace Deliverd.Requests.Policies;

/// <summary>
/// The inputs of the PostApiV1Policies operation.
/// </summary>
public sealed record PostApiV1PoliciesRequest
{
    public ApiV1PoliciesRequest? Body { get; init; }
}
