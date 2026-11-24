using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.ExplainabilityExport;

/// <summary>
/// The inputs of the CreateExplainabilityExport operation.
/// </summary>
public sealed record CreateExplainabilityExportOperationRequest
{
    public required XAmzTargetAmazonForecastServiceExplainabilityExportApi XAmzTarget { get; init; }
}
