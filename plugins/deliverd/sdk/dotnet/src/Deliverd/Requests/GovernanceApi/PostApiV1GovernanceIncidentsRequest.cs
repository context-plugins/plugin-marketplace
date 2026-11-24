using Deliverd.Models;

namespace Deliverd.Requests.GovernanceApi;

/// <summary>
/// The inputs of the PostApiV1GovernanceIncidents operation.
/// </summary>
public sealed record PostApiV1GovernanceIncidentsRequest
{
    public ApiV1GovernanceIncidentsRequest? Body { get; init; }
}
