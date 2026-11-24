using Cloro.Models.AnyOf;

namespace Cloro.Requests.MonitorApi;

/// <summary>
/// The inputs of the MonitorGoogleNews operation.
/// </summary>
public sealed record MonitorGoogleNewsRequest
{
    /// <summary>
    /// Request parameters for monitoring Google News results
    /// </summary>
    public required GoogleNewsMonitorRequest2 Body { get; init; }
}
