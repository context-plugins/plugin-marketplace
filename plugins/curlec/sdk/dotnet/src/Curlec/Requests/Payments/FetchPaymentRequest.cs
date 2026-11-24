namespace Curlec.Requests.Payments;

/// <summary>
/// The inputs of the FetchPayment operation.
/// </summary>
public sealed record FetchPaymentRequest
{
    /// <summary>
    /// Payment ID (pay_*).
    /// </summary>
    public required string Id { get; init; }
}
