using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the CreateDataset operation.
/// </summary>
public sealed record CreateDatasetOperationRequest
{
    public required XAmzTarget15 XAmzTarget { get; init; }
}
