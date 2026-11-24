namespace Lili.Requests;

/// <summary>
/// The inputs of the CreatePaymentNotification operation.
/// </summary>
public sealed record CreatePaymentNotificationRequest
{
    /// <summary>
    /// The customer ID, as provided in the create lead response
    /// </summary>
    public required string CustomerId { get; init; }
}
