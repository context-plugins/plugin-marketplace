using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.DatasetImportJob;

/// <summary>
/// The inputs of the DeleteDatasetImportJob operation.
/// </summary>
public sealed record DeleteDatasetImportJobOperationRequest
{
    public required XAmzTarget1AmazonForecastServiceDatasetImportJobApi XAmzTarget { get; init; }
}
