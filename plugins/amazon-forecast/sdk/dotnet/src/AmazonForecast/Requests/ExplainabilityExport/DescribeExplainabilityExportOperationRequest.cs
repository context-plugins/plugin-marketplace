using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.ExplainabilityExport;

/// <summary>
/// The inputs of the DescribeExplainabilityExport operation.
/// </summary>
public sealed record DescribeExplainabilityExportOperationRequest
{
    public required XAmzTarget2AmazonForecastServiceExplainabilityExportApi XAmzTarget { get; init; }
}
