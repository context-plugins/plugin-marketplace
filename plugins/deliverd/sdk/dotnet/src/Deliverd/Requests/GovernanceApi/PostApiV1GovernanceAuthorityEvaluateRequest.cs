using Deliverd.Models;

namespace Deliverd.Requests.GovernanceApi;

/// <summary>
/// The inputs of the PostApiV1GovernanceAuthorityEvaluate operation.
/// </summary>
public sealed record PostApiV1GovernanceAuthorityEvaluateRequest
{
    public ApiV1GovernanceAuthorityEvaluateRequest? Body { get; init; }
}
