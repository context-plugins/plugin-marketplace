using BetterStack.Models;

namespace BetterStack.Requests.Incidents;

/// <summary>
/// The inputs of the CreateIncident operation.
/// </summary>
public sealed record CreateIncidentRequest
{
    public required IncidentCreate Body { get; init; }
}
