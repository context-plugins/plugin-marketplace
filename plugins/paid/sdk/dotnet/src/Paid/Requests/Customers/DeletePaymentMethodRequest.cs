namespace Paid.Requests.Customers;

/// <summary>
/// The inputs of the DeletePaymentMethod operation.
/// </summary>
public sealed record DeletePaymentMethodRequest
{
    /// <summary>
    /// The external ID of the customer
    /// </summary>
    public required string ExternalId { get; init; }

    /// <summary>
    /// The ID of the payment method to delete
    /// </summary>
    public required string PaymentMethodId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
