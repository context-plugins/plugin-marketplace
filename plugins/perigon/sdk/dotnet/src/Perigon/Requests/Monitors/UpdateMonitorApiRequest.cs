using System;
using Perigon.Models;

namespace Perigon.Requests.Monitors;

/// <summary>
/// The inputs of the UpdateMonitorApi operation.
/// </summary>
public sealed record UpdateMonitorApiRequest
{
    /// <summary>
    /// UUID of the monitor to update.
    /// </summary>
    public required Guid Uuid { get; init; }

    public required SignalApiUpdateBody Body { get; init; }
}
