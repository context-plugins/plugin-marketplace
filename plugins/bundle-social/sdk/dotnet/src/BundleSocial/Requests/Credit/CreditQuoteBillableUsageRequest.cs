using BundleSocial.Models;

namespace BundleSocial.Requests.Credit;

/// <summary>
/// The inputs of the CreditQuoteBillableUsage operation.
/// </summary>
public sealed record CreditQuoteBillableUsageRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1BillingBillableUsageQuoteRequest? Body { get; init; }
}
