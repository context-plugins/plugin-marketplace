using AwsXRay.Models;

namespace AwsXRay.Requests.Operations;

/// <summary>
/// The inputs of the CancelTraceRetrieval operation.
/// </summary>
public sealed record CancelTraceRetrievalOperationRequest
{
    public CancelTraceRetrievalRequest? Body { get; init; }
}
