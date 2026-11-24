using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.DatasetGroups;

/// <summary>
/// The inputs of the DeleteDatasetGroup operation.
/// </summary>
public sealed record DeleteDatasetGroupOperationRequest
{
    public required XAmzTarget1 XAmzTarget { get; init; }
}
