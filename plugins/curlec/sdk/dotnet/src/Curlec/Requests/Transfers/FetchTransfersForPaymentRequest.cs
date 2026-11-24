namespace Curlec.Requests.Transfers;

/// <summary>
/// The inputs of the FetchTransfersForPayment operation.
/// </summary>
public sealed record FetchTransfersForPaymentRequest
{
    /// <summary>
    /// Payment ID (pay_*).
    /// </summary>
    public required string Id { get; init; }
}
