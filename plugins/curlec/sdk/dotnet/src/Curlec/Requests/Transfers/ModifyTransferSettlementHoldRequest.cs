using Curlec.Models;

namespace Curlec.Requests.Transfers;

/// <summary>
/// The inputs of the ModifyTransferSettlementHold operation.
/// </summary>
public sealed record ModifyTransferSettlementHoldRequest
{
    /// <summary>
    /// Transfer ID (trf_*).
    /// </summary>
    public required string Id { get; init; }

    public required TransfersRequest1 Body { get; init; }
}
