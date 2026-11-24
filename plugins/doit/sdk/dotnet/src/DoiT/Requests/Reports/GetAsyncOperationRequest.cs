namespace DoiT.Requests.Reports;

/// <summary>
/// The inputs of the GetAsyncOperation operation.
/// </summary>
public sealed record GetAsyncOperationRequest
{
    /// <summary>
    /// The unique ID of the async operation to poll.
    /// </summary>
    public required string OperationId { get; init; }
}
