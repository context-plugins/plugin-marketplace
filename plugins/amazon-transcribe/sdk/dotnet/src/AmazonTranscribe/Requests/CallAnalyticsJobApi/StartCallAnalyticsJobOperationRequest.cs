using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Requests.CallAnalyticsJobApi;

/// <summary>
/// The inputs of the StartCallAnalyticsJob operation.
/// </summary>
public sealed record StartCallAnalyticsJobOperationRequest
{
    public required XAmzTarget3AmazonTranscribeServiceCallAnalyticsJobApi XAmzTarget { get; init; }
}
