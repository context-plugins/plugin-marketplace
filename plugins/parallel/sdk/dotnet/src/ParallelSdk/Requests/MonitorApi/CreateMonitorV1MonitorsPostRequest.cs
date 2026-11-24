using ParallelSdk.Models;

namespace ParallelSdk.Requests.MonitorApi;

/// <summary>
/// The inputs of the CreateMonitorV1MonitorsPost operation.
/// </summary>
public sealed record CreateMonitorV1MonitorsPostRequest
{
    public required CreateMonitorRequest Body { get; init; }
}
