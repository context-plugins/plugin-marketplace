using Cloro.Models;

namespace Cloro.Requests.MonitorApi;

/// <summary>
/// The inputs of the MonitorBingAiMode operation.
/// </summary>
public sealed record MonitorBingAiModeRequest
{
    /// <summary>
    /// Request parameters for monitoring Bing AI Mode responses
    /// </summary>
    public required BingAiModeMonitorRequest Body { get; init; }
}
