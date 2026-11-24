using System;
using Basiq.Models.Enums;

namespace Basiq.Requests.Analytics;

/// <summary>
/// The inputs of the GetUserAnalytics operation.
/// </summary>
public sealed record GetUserAnalyticsRequest
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

    /// <summary>
    /// Filter analytics by one or more connection types. Must be a comma-separated string. Values are case-sensitive: all, cdr, pdf, web, csv.
    /// </summary>
    public string? ConnectionType { get; init; }
}
