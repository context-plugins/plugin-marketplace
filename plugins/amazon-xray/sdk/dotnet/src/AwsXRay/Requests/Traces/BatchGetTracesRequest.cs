using AwsXRay.Models;

namespace AwsXRay.Requests.Traces;

/// <summary>
/// The inputs of the BatchGetTraces operation.
/// </summary>
public sealed record BatchGetTracesRequest
{
    public TracesRequest? Body { get; init; }
}
