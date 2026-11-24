using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.Operations;

/// <summary>
/// The inputs of the DescribeAutoPredictor operation.
/// </summary>
public sealed record DescribeAutoPredictorOperationRequest
{
    public required XAmzTarget2AmazonForecastServiceOperationsApi XAmzTarget { get; init; }
}
