using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.Datasets;

/// <summary>
/// The inputs of the CreateDataset operation.
/// </summary>
public sealed record CreateDatasetOperationRequest
{
    public required XAmzTargetAmazonForecastServiceDatasetsApi XAmzTarget { get; init; }
}
