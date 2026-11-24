namespace DoiT.Requests.Reports;

/// <summary>
/// The inputs of the CancelAsyncOperation operation.
/// </summary>
public sealed record CancelAsyncOperationRequest
{
    /// <summary>
    /// The unique ID of the async operation to cancel.
    /// </summary>
    public required string OperationId { get; init; }

    /// <summary>
    /// If true, validates the request and returns 200 without modifying any state. The response body will have status "dry_run" and the X-Dry-Run response header will be set to "true".
    /// </summary>
    public bool? DryRun { get; init; }

    /// <summary>
    /// Unique key for this submission. Required on every request.
    /// </summary>
    public required string IdempotencyKey { get; init; }
}
