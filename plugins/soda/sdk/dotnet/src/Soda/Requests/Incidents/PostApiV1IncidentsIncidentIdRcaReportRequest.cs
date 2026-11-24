using Soda.Models;

namespace Soda.Requests.Incidents;

/// <summary>
/// The inputs of the PostApiV1IncidentsIncidentIdRcaReport operation.
/// </summary>
public sealed record PostApiV1IncidentsIncidentIdRcaReportRequest
{
    public required string IncidentId { get; init; }

    public required PublicApiRcaReportDto Body { get; init; }
}
