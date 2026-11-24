namespace ParallelSdk.Requests.MonitorApi;

/// <summary>
/// The inputs of the RetrieveMonitorV1MonitorsMonitorIdGet operation.
/// </summary>
public sealed record RetrieveMonitorV1MonitorsMonitorIdGetRequest
{
    public required string MonitorId { get; init; }
}
