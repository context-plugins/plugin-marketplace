using Cloro.Models;

namespace Cloro.Requests.MonitorApi;

/// <summary>
/// The inputs of the MonitorChatgpt operation.
/// </summary>
public sealed record MonitorChatgptRequest
{
    /// <summary>
    /// Request parameters for monitoring ChatGPT responses
    /// </summary>
    public required ChatGptMonitorRequest Body { get; init; }
}
