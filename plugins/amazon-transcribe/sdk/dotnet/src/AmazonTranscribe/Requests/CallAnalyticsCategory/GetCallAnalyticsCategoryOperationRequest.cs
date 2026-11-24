using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Requests.CallAnalyticsCategory;

/// <summary>
/// The inputs of the GetCallAnalyticsCategory operation.
/// </summary>
public sealed record GetCallAnalyticsCategoryOperationRequest
{
    public required XAmzTarget2 XAmzTarget { get; init; }
}
