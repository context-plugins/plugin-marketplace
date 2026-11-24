namespace Curlec.Requests.PaymentLinks;

/// <summary>
/// The inputs of the FetchAllPaymentLinks operation.
/// </summary>
public sealed record FetchAllPaymentLinksRequest
{
    /// <summary>
    /// Filter by associated payment ID.
    /// </summary>
    public string? PaymentId { get; init; }

    /// <summary>
    /// Filter by your custom reference number.
    /// </summary>
    public string? ReferenceId { get; init; }
}
