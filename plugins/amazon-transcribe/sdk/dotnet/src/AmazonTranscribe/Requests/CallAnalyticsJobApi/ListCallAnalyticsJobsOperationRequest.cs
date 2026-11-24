using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Requests.CallAnalyticsJobApi;

/// <summary>
/// The inputs of the ListCallAnalyticsJobs operation.
/// </summary>
public sealed record ListCallAnalyticsJobsOperationRequest
{
    public required XAmzTarget2AmazonTranscribeServiceCallAnalyticsJobApi XAmzTarget { get; init; }
}
