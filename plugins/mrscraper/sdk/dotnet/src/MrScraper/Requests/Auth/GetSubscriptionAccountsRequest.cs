namespace MrScraper.Requests.Auth;

/// <summary>
/// The inputs of the GetSubscriptionAccounts operation.
/// </summary>
public sealed record GetSubscriptionAccountsRequest
{
    /// <summary>
    /// Backoffice token to include database connection string
    /// </summary>
    public string? XBackofficeToken { get; init; }
}
