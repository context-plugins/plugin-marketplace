using Cloro.Models;

namespace Cloro.Requests.MonitorApi;

/// <summary>
/// The inputs of the MonitorPerplexity operation.
/// </summary>
public sealed record MonitorPerplexityRequest
{
    /// <summary>
    /// Request parameters for monitoring Perplexity responses
    /// </summary>
    public required PerplexityMonitorRequest Body { get; init; }
}
