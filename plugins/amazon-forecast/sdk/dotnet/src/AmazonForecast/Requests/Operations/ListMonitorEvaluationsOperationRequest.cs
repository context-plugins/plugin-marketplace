using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.Operations;

/// <summary>
/// The inputs of the ListMonitorEvaluations operation.
/// </summary>
public sealed record ListMonitorEvaluationsOperationRequest
{
    public required XAmzTarget5 XAmzTarget { get; init; }
}
