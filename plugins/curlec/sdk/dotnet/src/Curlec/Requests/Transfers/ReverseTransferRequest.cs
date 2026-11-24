using Curlec.Models;

namespace Curlec.Requests.Transfers;

/// <summary>
/// The inputs of the ReverseTransfer operation.
/// </summary>
public sealed record ReverseTransferRequest
{
    /// <summary>
    /// Transfer ID (trf_*).
    /// </summary>
    public required string Id { get; init; }

    public TransfersReversalsRequest? Body { get; init; }
}
