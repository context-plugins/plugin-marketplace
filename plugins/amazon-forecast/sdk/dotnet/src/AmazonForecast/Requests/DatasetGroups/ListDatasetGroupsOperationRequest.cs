using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.DatasetGroups;

/// <summary>
/// The inputs of the ListDatasetGroups operation.
/// </summary>
public sealed record ListDatasetGroupsOperationRequest
{
    public required XAmzTarget3 XAmzTarget { get; init; }
}
