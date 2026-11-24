using Curlec.Models;

namespace Curlec.Requests.Disputes;

/// <summary>
/// The inputs of the ContestDispute operation.
/// </summary>
public sealed record ContestDisputeRequest
{
    /// <summary>
    /// Dispute ID (disp_*).
    /// </summary>
    public required string Id { get; init; }

    public required DisputesContestRequest Body { get; init; }
}
