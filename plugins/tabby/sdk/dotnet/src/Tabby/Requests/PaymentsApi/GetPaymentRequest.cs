using System;

namespace Tabby.Requests.PaymentsApi;

/// <summary>
/// The inputs of the GetPayment operation.
/// </summary>
public sealed record GetPaymentRequest
{
    /// <summary>
    /// ID of the payment.
    /// </summary>
    public required Guid Id { get; init; }
}
