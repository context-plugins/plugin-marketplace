using AwsXRay.Models;

namespace AwsXRay.Requests.Operations;

/// <summary>
/// The inputs of the GetRetrievedTracesGraph operation.
/// </summary>
public sealed record GetRetrievedTracesGraphOperationRequest
{
    public GetRetrievedTracesGraphRequest? Body { get; init; }
}
