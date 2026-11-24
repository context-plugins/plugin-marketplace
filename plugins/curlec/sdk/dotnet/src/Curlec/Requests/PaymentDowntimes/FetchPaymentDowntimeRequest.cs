namespace Curlec.Requests.PaymentDowntimes;

/// <summary>
/// The inputs of the FetchPaymentDowntime operation.
/// </summary>
public sealed record FetchPaymentDowntimeRequest
{
    /// <summary>
    /// Downtime identifier.
    /// </summary>
    public required string Id { get; init; }
}
