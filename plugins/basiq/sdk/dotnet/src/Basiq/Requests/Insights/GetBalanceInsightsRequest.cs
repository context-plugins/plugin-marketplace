using System;
using Basiq.Models;

namespace Basiq.Requests.Insights;

/// <summary>
/// The inputs of the GetBalanceInsights operation.
/// </summary>
public sealed record GetBalanceInsightsRequest
{
    /// <summary>
    /// Unique identifier for the user
    /// </summary>
    public required Guid UserId { get; init; }

    public required BalanceInsightRequest Body { get; init; }
}
