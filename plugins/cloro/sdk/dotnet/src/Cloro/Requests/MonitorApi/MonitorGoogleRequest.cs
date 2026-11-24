using Cloro.Models.AnyOf;

namespace Cloro.Requests.MonitorApi;

/// <summary>
/// The inputs of the MonitorGoogle operation.
/// </summary>
public sealed record MonitorGoogleRequest
{
    /// <summary>
    /// Request parameters for monitoring Google search results
    /// </summary>
    public required GoogleMonitorRequest3 Body { get; init; }
}
