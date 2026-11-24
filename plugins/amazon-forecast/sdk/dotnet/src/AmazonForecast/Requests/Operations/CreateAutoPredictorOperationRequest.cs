using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.Operations;

/// <summary>
/// The inputs of the CreateAutoPredictor operation.
/// </summary>
public sealed record CreateAutoPredictorOperationRequest
{
    public required XAmzTarget1AmazonForecastServiceOperationsApi XAmzTarget { get; init; }
}
