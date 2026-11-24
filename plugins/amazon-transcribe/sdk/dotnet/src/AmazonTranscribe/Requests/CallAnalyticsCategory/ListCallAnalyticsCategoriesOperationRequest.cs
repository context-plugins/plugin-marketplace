using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Requests.CallAnalyticsCategory;

/// <summary>
/// The inputs of the ListCallAnalyticsCategories operation.
/// </summary>
public sealed record ListCallAnalyticsCategoriesOperationRequest
{
    public required XAmzTarget3 XAmzTarget { get; init; }
}
