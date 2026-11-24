using Curlec.Models;

namespace Curlec.Requests.Transfers;

/// <summary>
/// The inputs of the CreateTransfersFromPayment operation.
/// </summary>
public sealed record CreateTransfersFromPaymentRequest
{
    /// <summary>
    /// Payment ID (pay_*).
    /// </summary>
    public required string Id { get; init; }

    public required PaymentsTransfersRequest Body { get; init; }
}
