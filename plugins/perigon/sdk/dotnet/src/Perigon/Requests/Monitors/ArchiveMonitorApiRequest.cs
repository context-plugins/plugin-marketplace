using System;

namespace Perigon.Requests.Monitors;

/// <summary>
/// The inputs of the ArchiveMonitorApi operation.
/// </summary>
public sealed record ArchiveMonitorApiRequest
{
    /// <summary>
    /// UUID of the monitor to archive.
    /// </summary>
    public required Guid Uuid { get; init; }
}
