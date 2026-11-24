namespace Rendex.Requests.Jobs;

/// <summary>
/// The inputs of the GetBatchStatus operation.
/// </summary>
public sealed record GetBatchStatusRequest
{
    /// <summary>
    /// Batch identifier (returned by <c>POST /v1/screenshot/batch</c>)
    /// </summary>
    public required string BatchId { get; init; }
}
