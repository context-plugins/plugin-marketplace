using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Requests.CallAnalyticsCategory;

/// <summary>
/// The inputs of the DeleteCallAnalyticsCategory operation.
/// </summary>
public sealed record DeleteCallAnalyticsCategoryOperationRequest
{
    public required XAmzTarget1 XAmzTarget { get; init; }
}
