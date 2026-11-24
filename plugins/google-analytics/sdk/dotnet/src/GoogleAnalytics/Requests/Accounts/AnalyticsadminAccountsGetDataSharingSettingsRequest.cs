namespace GoogleAnalytics.Requests.Accounts;

/// <summary>
/// The inputs of the AnalyticsadminAccountsGetDataSharingSettings operation.
/// </summary>
public sealed record AnalyticsadminAccountsGetDataSharingSettingsRequest
{
    /// <summary>
    /// Resource name segment (accountsId).
    /// </summary>
    public required string AccountsId { get; init; }
}
