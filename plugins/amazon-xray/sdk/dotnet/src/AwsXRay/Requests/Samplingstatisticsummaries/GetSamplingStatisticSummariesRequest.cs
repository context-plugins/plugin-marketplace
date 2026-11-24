using AwsXRay.Models;

namespace AwsXRay.Requests.Samplingstatisticsummaries;

/// <summary>
/// The inputs of the GetSamplingStatisticSummaries operation.
/// </summary>
public sealed record GetSamplingStatisticSummariesRequest
{
    public SamplingStatisticSummariesRequest? Body { get; init; }
}
