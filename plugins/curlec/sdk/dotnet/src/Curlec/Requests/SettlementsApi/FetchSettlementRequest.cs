namespace Curlec.Requests.SettlementsApi;

/// <summary>
/// The inputs of the FetchSettlement operation.
/// </summary>
public sealed record FetchSettlementRequest
{
    /// <summary>
    /// Settlement ID (setl_*).
    /// </summary>
    public required string Id { get; init; }
}
