namespace Curlec.Requests.Refunds;

/// <summary>
/// The inputs of the FetchPaymentRefund operation.
/// </summary>
public sealed record FetchPaymentRefundRequest
{
    /// <summary>
    /// Payment ID (pay_*).
    /// </summary>
    public required string PaymentId { get; init; }

    /// <summary>
    /// Refund ID (rfnd_*).
    /// </summary>
    public required string RefundId { get; init; }
}
