using AwsXRay.Models;

namespace AwsXRay.Requests.Operations;

/// <summary>
/// The inputs of the ListRetrievedTraces operation.
/// </summary>
public sealed record ListRetrievedTracesOperationRequest
{
    public ListRetrievedTracesRequest? Body { get; init; }
}
