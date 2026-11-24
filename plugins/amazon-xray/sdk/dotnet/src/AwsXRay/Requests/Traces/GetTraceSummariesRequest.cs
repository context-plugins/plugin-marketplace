using AwsXRay.Models;

namespace AwsXRay.Requests.Traces;

/// <summary>
/// The inputs of the GetTraceSummaries operation.
/// </summary>
public sealed record GetTraceSummariesRequest
{
    public TraceSummariesRequest? Body { get; init; }
}
