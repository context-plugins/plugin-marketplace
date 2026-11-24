using Cloro.Models;

namespace Cloro.Requests.MonitorApi;

/// <summary>
/// The inputs of the MonitorCopilot operation.
/// </summary>
public sealed record MonitorCopilotRequest
{
    /// <summary>
    /// Request parameters for monitoring Copilot responses
    /// </summary>
    public required CopilotMonitorRequest Body { get; init; }
}
