using System;

namespace Perigon.Requests.Monitors;

/// <summary>
/// The inputs of the GetMonitorApi operation.
/// </summary>
public sealed record GetMonitorApiRequest
{
    /// <summary>
    /// UUID of the monitor to retrieve.
    /// </summary>
    public required Guid Uuid { get; init; }
}
