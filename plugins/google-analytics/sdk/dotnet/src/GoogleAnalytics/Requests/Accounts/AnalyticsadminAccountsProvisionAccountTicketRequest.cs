using GoogleAnalytics.Models;

namespace GoogleAnalytics.Requests.Accounts;

/// <summary>
/// The inputs of the AnalyticsadminAccountsProvisionAccountTicket operation.
/// </summary>
public sealed record AnalyticsadminAccountsProvisionAccountTicketRequest
{
    public required GoogleAnalyticsAdminV1BetaProvisionAccountTicketRequest Body { get; init; }
}
