namespace Paid.Requests.Customers;

/// <summary>
/// The inputs of the ListCustomerAliasesByExternalId operation.
/// </summary>
public sealed record ListCustomerAliasesByExternalIdRequest
{
    /// <summary>
    /// Customer ID from the integrator's system, stored on Paid as <c>externalId</c>.
    /// </summary>
    public required string ExternalId { get; init; }

    public int Limit { get; init; } = 10;

    public int? Offset { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }
}
