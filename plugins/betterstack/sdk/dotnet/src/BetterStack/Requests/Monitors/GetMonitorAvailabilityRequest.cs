namespace BetterStack.Requests.Monitors;

/// <summary>
/// The inputs of the GetMonitorAvailability operation.
/// </summary>
public sealed record GetMonitorAvailabilityRequest
{
    public required string Id { get; init; }
}
