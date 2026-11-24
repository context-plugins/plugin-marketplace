using Cloro.Models;

namespace Cloro.Requests.MonitorApi;

/// <summary>
/// The inputs of the MonitorGrok operation.
/// </summary>
public sealed record MonitorGrokRequest
{
    /// <summary>
    /// Request parameters for monitoring Grok responses
    /// </summary>
    public required GrokMonitorRequest Body { get; init; }
}
