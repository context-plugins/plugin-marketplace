using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.Resource;

/// <summary>
/// The inputs of the TagResource operation.
/// </summary>
public sealed record TagResourceOperationRequest
{
    public required XAmzTarget1AmazonForecastServiceResourceApi XAmzTarget { get; init; }
}
