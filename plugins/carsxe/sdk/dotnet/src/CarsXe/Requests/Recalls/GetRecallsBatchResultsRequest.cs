namespace CarsXe.Requests.Recalls;

/// <summary>
/// The inputs of the GetRecallsBatchResults operation.
/// </summary>
public sealed record GetRecallsBatchResultsRequest
{
    /// <summary>
    /// The batch ID returned from the submit endpoint.
    /// </summary>
    public required string BatchId { get; init; }

    /// <summary>
    /// Batch-scoped token returned by an x402 submit call. Use this instead of the key query parameter for status, results, and download requests.
    /// </summary>
    public string? XCarsXeBatchToken { get; init; }
}
