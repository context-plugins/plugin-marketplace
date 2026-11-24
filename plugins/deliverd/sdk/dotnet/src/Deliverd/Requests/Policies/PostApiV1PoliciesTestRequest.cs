using Deliverd.Models;

namespace Deliverd.Requests.Policies;

/// <summary>
/// The inputs of the PostApiV1PoliciesTest operation.
/// </summary>
public sealed record PostApiV1PoliciesTestRequest
{
    public ApiV1PoliciesTestRequest? Body { get; init; }
}
