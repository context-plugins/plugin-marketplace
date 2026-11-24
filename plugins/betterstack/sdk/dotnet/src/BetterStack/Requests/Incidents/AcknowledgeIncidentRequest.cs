namespace BetterStack.Requests.Incidents;

/// <summary>
/// The inputs of the AcknowledgeIncident operation.
/// </summary>
public sealed record AcknowledgeIncidentRequest
{
    public required string Id { get; init; }
}
