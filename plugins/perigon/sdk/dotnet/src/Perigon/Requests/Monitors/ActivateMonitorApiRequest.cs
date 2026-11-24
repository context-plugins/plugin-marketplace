using System;

namespace Perigon.Requests.Monitors;

/// <summary>
/// The inputs of the ActivateMonitorApi operation.
/// </summary>
public sealed record ActivateMonitorApiRequest
{
    /// <summary>
    /// UUID of the monitor to activate.
    /// </summary>
    public required Guid Uuid { get; init; }
}
