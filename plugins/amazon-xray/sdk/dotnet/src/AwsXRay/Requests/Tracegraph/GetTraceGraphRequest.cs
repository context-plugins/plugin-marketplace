using AwsXRay.Models;

namespace AwsXRay.Requests.Tracegraph;

/// <summary>
/// The inputs of the GetTraceGraph operation.
/// </summary>
public sealed record GetTraceGraphRequest
{
    public TraceGraphRequest? Body { get; init; }
}
