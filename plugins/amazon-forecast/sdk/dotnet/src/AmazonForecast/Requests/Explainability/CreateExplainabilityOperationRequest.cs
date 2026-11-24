using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.Explainability;

/// <summary>
/// The inputs of the CreateExplainability operation.
/// </summary>
public sealed record CreateExplainabilityOperationRequest
{
    public required XAmzTargetAmazonForecastServiceExplainabilityApi XAmzTarget { get; init; }
}
