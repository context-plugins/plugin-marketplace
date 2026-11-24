using Cloro.Models.AnyOf;

namespace Cloro.Requests.MonitorApi;

/// <summary>
/// The inputs of the MonitorAiMode operation.
/// </summary>
public sealed record MonitorAiModeRequest
{
    /// <summary>
    /// Request parameters for monitoring AI Mode responses
    /// </summary>
    public required AiModeMonitorRequest2 Body { get; init; }
}
