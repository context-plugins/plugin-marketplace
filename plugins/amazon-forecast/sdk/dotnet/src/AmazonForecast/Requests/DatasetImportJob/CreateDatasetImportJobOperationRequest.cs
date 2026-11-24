using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.DatasetImportJob;

/// <summary>
/// The inputs of the CreateDatasetImportJob operation.
/// </summary>
public sealed record CreateDatasetImportJobOperationRequest
{
    public required XAmzTargetAmazonForecastServiceDatasetImportJobApi XAmzTarget { get; init; }
}
