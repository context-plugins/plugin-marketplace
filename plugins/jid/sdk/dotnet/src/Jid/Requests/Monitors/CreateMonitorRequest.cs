using Jid.Models;

namespace Jid.Requests.Monitors;

/// <summary>
/// The inputs of the CreateMonitor operation.
/// </summary>
public sealed record CreateMonitorRequest
{
    public required V1MonitorsRequest Body { get; init; }
}
