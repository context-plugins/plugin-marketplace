using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Requests.CallAnalyticsCategory;

/// <summary>
/// The inputs of the CreateCallAnalyticsCategory operation.
/// </summary>
public sealed record CreateCallAnalyticsCategoryOperationRequest
{
    public required XAmzTarget XAmzTarget { get; init; }
}
