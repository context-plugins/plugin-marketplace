namespace BetterStack.Requests.Incidents;

/// <summary>
/// The inputs of the ReopenIncident operation.
/// </summary>
public sealed record ReopenIncidentRequest
{
    public required string Id { get; init; }
}
