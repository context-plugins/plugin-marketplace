namespace Paid.Requests.Customers;

/// <summary>
/// The inputs of the GetCustomerCreditBalancesByExternalId operation.
/// </summary>
public sealed record GetCustomerCreditBalancesByExternalIdRequest
{
    /// <summary>
    /// Customer ID from the integrator's system, stored on Paid as <c>externalId</c>.
    /// </summary>
    public required string ExternalId { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }
}
