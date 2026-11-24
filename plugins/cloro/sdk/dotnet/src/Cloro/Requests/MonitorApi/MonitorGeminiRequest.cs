using Cloro.Models;

namespace Cloro.Requests.MonitorApi;

/// <summary>
/// The inputs of the MonitorGemini operation.
/// </summary>
public sealed record MonitorGeminiRequest
{
    /// <summary>
    /// Request parameters for monitoring Gemini responses
    /// </summary>
    public required GeminiMonitorRequest Body { get; init; }
}
