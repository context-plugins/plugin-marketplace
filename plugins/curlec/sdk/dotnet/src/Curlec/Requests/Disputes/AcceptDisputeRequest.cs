namespace Curlec.Requests.Disputes;

/// <summary>
/// The inputs of the AcceptDispute operation.
/// </summary>
public sealed record AcceptDisputeRequest
{
    /// <summary>
    /// Dispute ID (disp_*).
    /// </summary>
    public required string Id { get; init; }
}
