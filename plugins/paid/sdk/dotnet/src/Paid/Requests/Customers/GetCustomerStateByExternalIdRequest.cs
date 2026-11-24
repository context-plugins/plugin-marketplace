namespace Paid.Requests.Customers;

/// <summary>
/// The inputs of the GetCustomerStateByExternalId operation.
/// </summary>
public sealed record GetCustomerStateByExternalIdRequest
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
