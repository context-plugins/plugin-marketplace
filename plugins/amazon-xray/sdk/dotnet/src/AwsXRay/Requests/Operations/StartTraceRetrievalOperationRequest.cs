using AwsXRay.Models;

namespace AwsXRay.Requests.Operations;

/// <summary>
/// The inputs of the StartTraceRetrieval operation.
/// </summary>
public sealed record StartTraceRetrievalOperationRequest
{
    public StartTraceRetrievalRequest? Body { get; init; }
}
