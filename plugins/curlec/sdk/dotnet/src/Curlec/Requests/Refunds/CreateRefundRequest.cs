using Curlec.Models;

namespace Curlec.Requests.Refunds;

/// <summary>
/// The inputs of the CreateRefund operation.
/// </summary>
public sealed record CreateRefundRequest
{
    /// <summary>
    /// Payment ID to refund (pay_*). Payment must be captured.
    /// </summary>
    public required string Id { get; init; }

    public PaymentsRefundRequest? Body { get; init; }
}
