using Curlec.Models;

namespace Curlec.Requests.Payments;

/// <summary>
/// The inputs of the UpdatePayment operation.
/// </summary>
public sealed record UpdatePaymentRequest
{
    /// <summary>
    /// Payment ID (pay_*).
    /// </summary>
    public required string Id { get; init; }

    public required PaymentsRequest Body { get; init; }
}
