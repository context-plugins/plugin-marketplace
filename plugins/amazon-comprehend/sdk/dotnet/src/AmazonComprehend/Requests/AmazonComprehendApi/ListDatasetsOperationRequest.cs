using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the ListDatasets operation.
/// </summary>
public sealed record ListDatasetsOperationRequest
{
    public required XAmzTarget17 XAmzTarget { get; init; }
}
