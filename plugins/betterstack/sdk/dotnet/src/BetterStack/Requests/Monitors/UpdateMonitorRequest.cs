using BetterStack.Models;

namespace BetterStack.Requests.Monitors;

/// <summary>
/// The inputs of the UpdateMonitor operation.
/// </summary>
public sealed record UpdateMonitorRequest
{
    public required string Id { get; init; }

    public required MonitorCreate Body { get; init; }
}
