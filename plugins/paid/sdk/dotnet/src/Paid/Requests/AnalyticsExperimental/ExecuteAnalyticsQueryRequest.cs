using Paid.Models;

namespace Paid.Requests.AnalyticsExperimental;

/// <summary>
/// The inputs of the ExecuteAnalyticsQuery operation.
/// </summary>
public sealed record ExecuteAnalyticsQueryRequest
{
    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public AnalyticsQueryRequest? Body { get; init; }
}
