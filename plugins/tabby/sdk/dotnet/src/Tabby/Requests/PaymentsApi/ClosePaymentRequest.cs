using System;

namespace Tabby.Requests.PaymentsApi;

/// <summary>
/// The inputs of the ClosePayment operation.
/// </summary>
public sealed record ClosePaymentRequest
{
    /// <summary>
    /// ID of the payment.
    /// </summary>
    public required Guid Id { get; init; }
}
