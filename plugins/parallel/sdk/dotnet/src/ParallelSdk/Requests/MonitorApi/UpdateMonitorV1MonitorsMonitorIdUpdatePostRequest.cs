using ParallelSdk.Models;

namespace ParallelSdk.Requests.MonitorApi;

/// <summary>
/// The inputs of the UpdateMonitorV1MonitorsMonitorIdUpdatePost operation.
/// </summary>
public sealed record UpdateMonitorV1MonitorsMonitorIdUpdatePostRequest
{
    public required string MonitorId { get; init; }

    public required UpdateMonitorRequest Body { get; init; }
}
