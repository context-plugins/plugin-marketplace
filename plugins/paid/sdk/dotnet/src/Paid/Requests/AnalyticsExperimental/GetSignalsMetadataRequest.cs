using System;

namespace Paid.Requests.AnalyticsExperimental;

/// <summary>
/// The inputs of the GetSignalsMetadata operation.
/// </summary>
public sealed record GetSignalsMetadataRequest
{
    /// <summary>
    /// Restrict discovery to a single signal name.
    /// </summary>
    public string? SignalName { get; init; }

    /// <summary>
    /// Start of the discovery window. Defaults to 30 days ago.
    /// </summary>
    public DateTimeOffset? FromDate { get; init; }

    /// <summary>
    /// End of the discovery window. Defaults to now.
    /// </summary>
    public DateTimeOffset? ToDate { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }
}
