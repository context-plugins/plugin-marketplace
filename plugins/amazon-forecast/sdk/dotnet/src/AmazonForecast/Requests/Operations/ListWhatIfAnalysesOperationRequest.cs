using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.Operations;

/// <summary>
/// The inputs of the ListWhatIfAnalyses operation.
/// </summary>
public sealed record ListWhatIfAnalysesOperationRequest
{
    public required XAmzTarget6 XAmzTarget { get; init; }
}
