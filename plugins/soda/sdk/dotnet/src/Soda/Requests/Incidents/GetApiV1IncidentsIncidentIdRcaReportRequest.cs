namespace Soda.Requests.Incidents;

/// <summary>
/// The inputs of the GetApiV1IncidentsIncidentIdRcaReport operation.
/// </summary>
public sealed record GetApiV1IncidentsIncidentIdRcaReportRequest
{
    public required string IncidentId { get; init; }
}
