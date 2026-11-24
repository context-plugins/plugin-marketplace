using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.Operations;

/// <summary>
/// The inputs of the GetAccuracyMetrics operation.
/// </summary>
public sealed record GetAccuracyMetricsOperationRequest
{
    public required XAmzTarget4AmazonForecastServiceOperationsApi XAmzTarget { get; init; }
}
