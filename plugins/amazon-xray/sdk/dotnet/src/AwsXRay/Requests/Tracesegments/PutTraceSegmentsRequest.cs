using AwsXRay.Models;

namespace AwsXRay.Requests.Tracesegments;

/// <summary>
/// The inputs of the PutTraceSegments operation.
/// </summary>
public sealed record PutTraceSegmentsRequest
{
    public TraceSegmentsRequest? Body { get; init; }
}
