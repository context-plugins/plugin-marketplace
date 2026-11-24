namespace BetterStack.Requests.Incidents;

/// <summary>
/// The inputs of the GetIncidentTimeline operation.
/// </summary>
public sealed record GetIncidentTimelineRequest
{
    public required string Id { get; init; }
}
