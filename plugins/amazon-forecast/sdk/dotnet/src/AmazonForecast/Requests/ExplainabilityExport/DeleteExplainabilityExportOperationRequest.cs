using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.ExplainabilityExport;

/// <summary>
/// The inputs of the DeleteExplainabilityExport operation.
/// </summary>
public sealed record DeleteExplainabilityExportOperationRequest
{
    public required XAmzTarget1AmazonForecastServiceExplainabilityExportApi XAmzTarget { get; init; }
}
