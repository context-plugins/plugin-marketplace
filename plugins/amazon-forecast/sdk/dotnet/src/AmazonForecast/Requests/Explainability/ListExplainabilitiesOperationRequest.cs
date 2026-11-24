using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.Explainability;

/// <summary>
/// The inputs of the ListExplainabilities operation.
/// </summary>
public sealed record ListExplainabilitiesOperationRequest
{
    public required XAmzTarget3AmazonForecastServiceExplainabilityApi XAmzTarget { get; init; }
}
