using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.DatasetGroups;

/// <summary>
/// The inputs of the UpdateDatasetGroup operation.
/// </summary>
public sealed record UpdateDatasetGroupOperationRequest
{
    public required XAmzTarget4 XAmzTarget { get; init; }
}
