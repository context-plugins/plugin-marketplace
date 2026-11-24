using AwsXRay.Models;

namespace AwsXRay.Requests.Tracesummaries;

/// <summary>
/// The inputs of the GetTraceSummaries2 operation.
/// </summary>
public sealed record GetTraceSummaries2Request
{
    public TraceSummariesRequest? Body { get; init; }
}
