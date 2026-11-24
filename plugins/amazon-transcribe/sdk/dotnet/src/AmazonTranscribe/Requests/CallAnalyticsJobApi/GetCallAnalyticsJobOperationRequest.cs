using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Requests.CallAnalyticsJobApi;

/// <summary>
/// The inputs of the GetCallAnalyticsJob operation.
/// </summary>
public sealed record GetCallAnalyticsJobOperationRequest
{
    public required XAmzTarget1AmazonTranscribeServiceCallAnalyticsJobApi XAmzTarget { get; init; }
}
