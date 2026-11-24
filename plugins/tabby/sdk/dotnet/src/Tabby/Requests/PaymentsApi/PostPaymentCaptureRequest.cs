using System;
using Tabby.Models;

namespace Tabby.Requests.PaymentsApi;

/// <summary>
/// The inputs of the PostPaymentCapture operation.
/// </summary>
public sealed record PostPaymentCaptureRequest
{
    /// <summary>
    /// ID of the payment.
    /// </summary>
    public required Guid Id { get; init; }

    public required CaptureRequest Body { get; init; }
}
