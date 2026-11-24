using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.Tags;

/// <summary>
/// The inputs of the ListTagsForResource operation.
/// </summary>
public sealed record ListTagsForResourceOperationRequest
{
    public required XAmzTargetAmazonForecastServiceTagsApi XAmzTarget { get; init; }
}
