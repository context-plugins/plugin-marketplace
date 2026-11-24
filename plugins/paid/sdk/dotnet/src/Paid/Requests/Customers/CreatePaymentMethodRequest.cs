using Paid.Models;

namespace Paid.Requests.Customers;

/// <summary>
/// The inputs of the CreatePaymentMethod operation.
/// </summary>
public sealed record CreatePaymentMethodRequest
{
    /// <summary>
    /// The external ID of the customer
    /// </summary>
    public required string ExternalId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }

    public CustomersExternalPaymentMethodsRequest? Body { get; init; }
}
