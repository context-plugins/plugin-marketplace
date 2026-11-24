namespace BetterStack.Requests.Incidents;

/// <summary>
/// The inputs of the GetIncident operation.
/// </summary>
public sealed record GetIncidentRequest
{
    public required string Id { get; init; }
}
