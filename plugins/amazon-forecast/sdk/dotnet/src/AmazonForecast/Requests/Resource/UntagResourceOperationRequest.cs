using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.Resource;

/// <summary>
/// The inputs of the UntagResource operation.
/// </summary>
public sealed record UntagResourceOperationRequest
{
    public required XAmzTarget2AmazonForecastServiceResourceApi XAmzTarget { get; init; }
}
