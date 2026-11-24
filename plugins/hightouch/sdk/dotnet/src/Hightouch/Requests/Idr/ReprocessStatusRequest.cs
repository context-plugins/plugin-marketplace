namespace Hightouch.Requests.Idr;

/// <summary>
/// The inputs of the ReprocessStatus operation.
/// </summary>
public sealed record ReprocessStatusRequest
{
    /// <summary>
    /// Required. ID of the graph for the reprocessing request.
    /// </summary>
    public required string GraphId { get; init; }

    /// <summary>
    /// Required. ID of the reprocessing request.
    /// </summary>
    public required string RequestId { get; init; }
}
