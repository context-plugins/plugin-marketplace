namespace Curlec.Requests.Transfers;

/// <summary>
/// The inputs of the ListReversals operation.
/// </summary>
public sealed record ListReversalsRequest
{
    /// <summary>
    /// Transfer ID (trf_*).
    /// </summary>
    public required string Id { get; init; }
}
