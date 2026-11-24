using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.ExplainabilityExport;

/// <summary>
/// The inputs of the ListExplainabilityExports operation.
/// </summary>
public sealed record ListExplainabilityExportsOperationRequest
{
    public required XAmzTarget3AmazonForecastServiceExplainabilityExportApi XAmzTarget { get; init; }
}
