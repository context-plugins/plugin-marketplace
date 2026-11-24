using System;

namespace Deliverd.Requests.GovernanceApi;

/// <summary>
/// The inputs of the GetApiV1GovernanceIncidentsById operation.
/// </summary>
public sealed record GetApiV1GovernanceIncidentsByIdRequest
{
    public required Guid Id { get; init; }
}
