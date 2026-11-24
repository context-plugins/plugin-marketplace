using System;

namespace Basiq.Requests.Insights;

/// <summary>
/// The inputs of the ListUserInsights operation.
/// </summary>
public sealed record ListUserInsightsRequest
{
    /// <summary>
    /// The unique identifier of the user
    /// </summary>
    public required Guid UserId { get; init; }

    /// <summary>
    /// Filter parameter supporting multiple filter fields separated by commas. Supported fields: 'created' (date in YYYY-MM-DD format) and 'insightType' (account, balance, identity, income, expense-ratio). Operators: gteq (&gt;=), lteq (&lt;=), gt (&gt;), lt (&lt;), eq (=), bt (between two dates). Examples: 'created.gteq('2025-06-16')', 'created.bt('2025-08-25','2025-09-02')', 'insightType.eq('account')', 'created.bt('2025-06-01','2025-08-30'),insightType.eq('balance')'
    /// </summary>
    public string? Filter { get; init; }
}
