using Deliverd.Models;

namespace Deliverd.Requests.GovernanceApi;

/// <summary>
/// The inputs of the PostApiV1GovernanceFrameworks operation.
/// </summary>
public sealed record PostApiV1GovernanceFrameworksRequest
{
    public ApiV1GovernanceFrameworksRequest? Body { get; init; }
}
