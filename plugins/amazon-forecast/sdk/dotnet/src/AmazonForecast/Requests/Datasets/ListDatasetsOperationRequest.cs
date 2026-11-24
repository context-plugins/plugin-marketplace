using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.Datasets;

/// <summary>
/// The inputs of the ListDatasets operation.
/// </summary>
public sealed record ListDatasetsOperationRequest
{
    public required XAmzTarget3AmazonForecastServiceDatasetsApi XAmzTarget { get; init; }
}
