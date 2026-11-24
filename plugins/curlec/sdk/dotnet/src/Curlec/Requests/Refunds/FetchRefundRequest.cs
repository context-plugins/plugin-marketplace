namespace Curlec.Requests.Refunds;

/// <summary>
/// The inputs of the FetchRefund operation.
/// </summary>
public sealed record FetchRefundRequest
{
    /// <summary>
    /// Refund ID (rfnd_*).
    /// </summary>
    public required string Id { get; init; }
}
