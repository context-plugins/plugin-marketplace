using System;
using Tabby.Models;

namespace Tabby.Requests.PaymentsApi;

/// <summary>
/// The inputs of the PostPaymentRefund operation.
/// </summary>
public sealed record PostPaymentRefundRequest
{
    /// <summary>
    /// ID of the payment.
    /// </summary>
    public required Guid Id { get; init; }

    public required RefundRequest Body { get; init; }
}
