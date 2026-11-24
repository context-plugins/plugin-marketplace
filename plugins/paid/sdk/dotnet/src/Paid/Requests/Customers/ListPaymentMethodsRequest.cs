namespace Paid.Requests.Customers;

/// <summary>
/// The inputs of the ListPaymentMethods operation.
/// </summary>
public sealed record ListPaymentMethodsRequest
{
    /// <summary>
    /// The external ID of the customer
    /// </summary>
    public required string ExternalId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
