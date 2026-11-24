using Curlec.Models;

namespace Curlec.Requests.Payments;

/// <summary>
/// The inputs of the CapturePayment operation.
/// </summary>
public sealed record CapturePaymentRequest
{
    /// <summary>
    /// Payment ID (pay_*). Must be in 'authorized' status.
    /// </summary>
    public required string Id { get; init; }

    public required PaymentsCaptureRequest Body { get; init; }
}
