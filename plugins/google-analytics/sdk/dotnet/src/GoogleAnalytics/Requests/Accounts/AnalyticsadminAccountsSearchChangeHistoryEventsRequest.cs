using GoogleAnalytics.Models;

namespace GoogleAnalytics.Requests.Accounts;

/// <summary>
/// The inputs of the AnalyticsadminAccountsSearchChangeHistoryEvents operation.
/// </summary>
public sealed record AnalyticsadminAccountsSearchChangeHistoryEventsRequest
{
    /// <summary>
    /// Resource name segment (accountsId).
    /// </summary>
    public required string AccountsId { get; init; }

    public required GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsRequest Body { get; init; }
}
