namespace BetterStack.Requests.Incidents;

/// <summary>
/// The inputs of the DeleteIncident operation.
/// </summary>
public sealed record DeleteIncidentRequest
{
    public required string Id { get; init; }
}
