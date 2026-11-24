using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.Datasets;

/// <summary>
/// The inputs of the DeleteDataset operation.
/// </summary>
public sealed record DeleteDatasetOperationRequest
{
    public required XAmzTarget1AmazonForecastServiceDatasetsApi XAmzTarget { get; init; }
}
