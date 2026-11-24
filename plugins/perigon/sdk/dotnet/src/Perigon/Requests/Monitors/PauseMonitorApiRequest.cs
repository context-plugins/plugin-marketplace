using System;

namespace Perigon.Requests.Monitors;

/// <summary>
/// The inputs of the PauseMonitorApi operation.
/// </summary>
public sealed record PauseMonitorApiRequest
{
    /// <summary>
    /// UUID of the monitor to pause.
    /// </summary>
    public required Guid Uuid { get; init; }
}
