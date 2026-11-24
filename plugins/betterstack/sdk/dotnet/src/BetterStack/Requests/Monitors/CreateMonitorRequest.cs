using BetterStack.Models;

namespace BetterStack.Requests.Monitors;

/// <summary>
/// The inputs of the CreateMonitor operation.
/// </summary>
public sealed record CreateMonitorRequest
{
    public required MonitorCreate Body { get; init; }
}
