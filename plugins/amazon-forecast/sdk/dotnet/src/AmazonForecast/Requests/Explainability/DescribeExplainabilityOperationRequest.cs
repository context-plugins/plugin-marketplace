using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.Explainability;

/// <summary>
/// The inputs of the DescribeExplainability operation.
/// </summary>
public sealed record DescribeExplainabilityOperationRequest
{
    public required XAmzTarget2AmazonForecastServiceExplainabilityApi XAmzTarget { get; init; }
}
