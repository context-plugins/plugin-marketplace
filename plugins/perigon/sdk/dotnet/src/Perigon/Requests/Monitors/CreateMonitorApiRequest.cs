using Perigon.Models;

namespace Perigon.Requests.Monitors;

/// <summary>
/// The inputs of the CreateMonitorApi operation.
/// </summary>
public sealed record CreateMonitorApiRequest
{
    public required SignalApiCreateBody Body { get; init; }
}
