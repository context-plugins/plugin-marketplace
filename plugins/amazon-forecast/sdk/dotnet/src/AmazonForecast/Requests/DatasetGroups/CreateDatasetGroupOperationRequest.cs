using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.DatasetGroups;

/// <summary>
/// The inputs of the CreateDatasetGroup operation.
/// </summary>
public sealed record CreateDatasetGroupOperationRequest
{
    public required XAmzTarget XAmzTarget { get; init; }
}
