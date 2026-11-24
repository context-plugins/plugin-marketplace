using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.Operations;

/// <summary>
/// The inputs of the DeleteResourceTree operation.
/// </summary>
public sealed record DeleteResourceTreeOperationRequest
{
    public required XAmzTarget3AmazonForecastServiceOperationsApi XAmzTarget { get; init; }
}
