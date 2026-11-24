using System;
using Tabby.Models;

namespace Tabby.Requests.PaymentsApi;

/// <summary>
/// The inputs of the PutPayment operation.
/// </summary>
public sealed record PutPaymentRequest
{
    /// <summary>
    /// ID of the payment.
    /// </summary>
    public required Guid Id { get; init; }

    public required ApiV2PaymentsRequest Body { get; init; }
}
