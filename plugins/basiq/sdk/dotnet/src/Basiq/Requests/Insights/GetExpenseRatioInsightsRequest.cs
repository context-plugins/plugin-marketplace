using System;
using Basiq.Models;

namespace Basiq.Requests.Insights;

/// <summary>
/// The inputs of the GetExpenseRatioInsights operation.
/// </summary>
public sealed record GetExpenseRatioInsightsRequest
{
    /// <summary>
    /// The unique identifier for the user
    /// </summary>
    public required Guid UserId { get; init; }

    public required ExpenseRatioInsightRequest Body { get; init; }
}
