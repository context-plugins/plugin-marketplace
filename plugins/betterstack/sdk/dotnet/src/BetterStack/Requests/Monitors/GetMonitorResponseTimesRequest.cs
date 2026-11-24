namespace BetterStack.Requests.Monitors;

/// <summary>
/// The inputs of the GetMonitorResponseTimes operation.
/// </summary>
public sealed record GetMonitorResponseTimesRequest
{
    public required string Id { get; init; }
}
