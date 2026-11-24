using System;
using Deliverd.Models;

namespace Deliverd.Requests.GovernanceApi;

/// <summary>
/// The inputs of the PostApiV1GovernanceIncidentsByIdReports operation.
/// </summary>
public sealed record PostApiV1GovernanceIncidentsByIdReportsRequest
{
    public required Guid Id { get; init; }

    public ApiV1GovernanceIncidentsReportsRequest? Body { get; init; }
}
