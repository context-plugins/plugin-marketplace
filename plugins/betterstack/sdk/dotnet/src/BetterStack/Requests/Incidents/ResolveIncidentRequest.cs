namespace BetterStack.Requests.Incidents;

/// <summary>
/// The inputs of the ResolveIncident operation.
/// </summary>
public sealed record ResolveIncidentRequest
{
    public required string Id { get; init; }
}
