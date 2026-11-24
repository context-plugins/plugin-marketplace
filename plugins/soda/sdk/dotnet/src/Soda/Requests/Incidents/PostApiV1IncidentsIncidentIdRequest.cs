using Soda.Models;

namespace Soda.Requests.Incidents;

/// <summary>
/// The inputs of the PostApiV1IncidentsIncidentId operation.
/// </summary>
public sealed record PostApiV1IncidentsIncidentIdRequest
{
    public required string IncidentId { get; init; }

    public required PublicApiUpdateIncidentDto Body { get; init; }
}
