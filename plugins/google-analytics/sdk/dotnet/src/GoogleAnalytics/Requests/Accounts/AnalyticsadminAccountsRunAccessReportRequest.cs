using GoogleAnalytics.Models;

namespace GoogleAnalytics.Requests.Accounts;

/// <summary>
/// The inputs of the AnalyticsadminAccountsRunAccessReport operation.
/// </summary>
public sealed record AnalyticsadminAccountsRunAccessReportRequest
{
    /// <summary>
    /// Resource name segment (accountsId).
    /// </summary>
    public required string AccountsId { get; init; }

    public required GoogleAnalyticsAdminV1BetaRunAccessReportRequest Body { get; init; }
}
