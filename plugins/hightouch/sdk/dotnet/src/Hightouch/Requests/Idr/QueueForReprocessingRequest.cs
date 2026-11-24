using Hightouch.Models;

namespace Hightouch.Requests.Idr;

/// <summary>
/// The inputs of the QueueForReprocessing operation.
/// </summary>
public sealed record QueueForReprocessingRequest
{
    /// <summary>
    /// Required. ID of the graph containing the identifiers.
    /// </summary>
    public required string GraphId { get; init; }

    public IdrQueueForReprocessingInput? Body { get; init; }
}
