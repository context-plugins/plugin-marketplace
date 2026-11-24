using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.Resource;

/// <summary>
/// The inputs of the StopResource operation.
/// </summary>
public sealed record StopResourceOperationRequest
{
    public required XAmzTargetAmazonForecastServiceResourceApi XAmzTarget { get; init; }
}
