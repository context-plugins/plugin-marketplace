namespace ParallelSdk.Requests.MonitorApi;

/// <summary>
/// The inputs of the TriggerMonitorRunV1MonitorsMonitorIdTriggerPost operation.
/// </summary>
public sealed record TriggerMonitorRunV1MonitorsMonitorIdTriggerPostRequest
{
    public required string MonitorId { get; init; }
}
