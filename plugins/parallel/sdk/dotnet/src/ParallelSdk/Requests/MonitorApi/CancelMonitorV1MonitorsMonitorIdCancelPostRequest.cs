namespace ParallelSdk.Requests.MonitorApi;

/// <summary>
/// The inputs of the CancelMonitorV1MonitorsMonitorIdCancelPost operation.
/// </summary>
public sealed record CancelMonitorV1MonitorsMonitorIdCancelPostRequest
{
    public required string MonitorId { get; init; }
}
