using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Requests.CallAnalyticsCategory;

/// <summary>
/// The inputs of the UpdateCallAnalyticsCategory operation.
/// </summary>
public sealed record UpdateCallAnalyticsCategoryOperationRequest
{
    public required XAmzTarget4 XAmzTarget { get; init; }
}
