using AwsXRay.Models;

namespace AwsXRay.Requests.Operations;

/// <summary>
/// The inputs of the UpdateTraceSegmentDestination operation.
/// </summary>
public sealed record UpdateTraceSegmentDestinationOperationRequest
{
    public UpdateTraceSegmentDestinationRequest? Body { get; init; }
}
