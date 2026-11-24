using Curlec.Models;

namespace Curlec.Requests.Refunds;

/// <summary>
/// The inputs of the UpdateRefund operation.
/// </summary>
public sealed record UpdateRefundRequest
{
    /// <summary>
    /// Refund ID (rfnd_*).
    /// </summary>
    public required string Id { get; init; }

    public required RefundsRequest Body { get; init; }
}
