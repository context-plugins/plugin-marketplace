namespace BetterStack.Requests.Monitors;

/// <summary>
/// The inputs of the GetMonitor operation.
/// </summary>
public sealed record GetMonitorRequest
{
    public required string Id { get; init; }
}
