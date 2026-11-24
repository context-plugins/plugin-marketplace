using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Requests.CallAnalyticsJobApi;

/// <summary>
/// The inputs of the DeleteCallAnalyticsJob operation.
/// </summary>
public sealed record DeleteCallAnalyticsJobOperationRequest
{
    public required XAmzTargetAmazonTranscribeServiceCallAnalyticsJobApi XAmzTarget { get; init; }
}
