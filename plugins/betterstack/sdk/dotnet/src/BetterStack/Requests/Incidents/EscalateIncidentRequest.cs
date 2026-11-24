namespace BetterStack.Requests.Incidents;

/// <summary>
/// The inputs of the EscalateIncident operation.
/// </summary>
public sealed record EscalateIncidentRequest
{
    public required string Id { get; init; }
}
