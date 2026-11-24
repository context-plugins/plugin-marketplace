namespace GoogleAnalytics.Requests.Accounts;

/// <summary>
/// The inputs of the AnalyticsadminAccountsDelete operation.
/// </summary>
public sealed record AnalyticsadminAccountsDeleteRequest
{
    /// <summary>
    /// Resource name segment (accountsId).
    /// </summary>
    public required string AccountsId { get; init; }
}
