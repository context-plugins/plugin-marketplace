namespace Curlec.Requests.Disputes;

/// <summary>
/// The inputs of the FetchDispute operation.
/// </summary>
public sealed record FetchDisputeRequest
{
    /// <summary>
    /// Dispute ID (disp_*).
    /// </summary>
    public required string Id { get; init; }
}
