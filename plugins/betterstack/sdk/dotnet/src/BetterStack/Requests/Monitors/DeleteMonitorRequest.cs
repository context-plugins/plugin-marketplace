namespace BetterStack.Requests.Monitors;

/// <summary>
/// The inputs of the DeleteMonitor operation.
/// </summary>
public sealed record DeleteMonitorRequest
{
    public required string Id { get; init; }
}
