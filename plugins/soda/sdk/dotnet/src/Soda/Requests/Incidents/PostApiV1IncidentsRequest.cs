using Soda.Models;

namespace Soda.Requests.Incidents;

/// <summary>
/// The inputs of the PostApiV1Incidents operation.
/// </summary>
public sealed record PostApiV1IncidentsRequest
{
    public required PublicApiCreateIncidentDto Body { get; init; }
}
