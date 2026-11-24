using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.Explainability;

/// <summary>
/// The inputs of the DeleteExplainability operation.
/// </summary>
public sealed record DeleteExplainabilityOperationRequest
{
    public required XAmzTarget1AmazonForecastServiceExplainabilityApi XAmzTarget { get; init; }
}
