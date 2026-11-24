using System;
using Basiq.Models.Enums;

namespace Basiq.Requests.Analytics;

/// <summary>
/// The inputs of the GetConnectionAnalytics operation.
/// </summary>
public sealed record GetConnectionAnalyticsRequest
{
    /// <summary>
    /// Time interval for analytics.
    /// </summary>
    public required Interval Interval { get; init; }

    /// <summary>
    /// Start date of the analytics period (e.g., 2023-01-01).
    /// </summary>
    public DateTimeOffset? FromDate { get; init; }

    /// <summary>
    /// End date of the analytics period (e.g., 2024-01-01).
    /// </summary>
    public DateTimeOffset? ToDate { get; init; }
}
