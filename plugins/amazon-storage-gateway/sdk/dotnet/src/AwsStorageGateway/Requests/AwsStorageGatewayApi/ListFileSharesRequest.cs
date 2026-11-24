using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the ListFileShares operation.
/// </summary>
public sealed record ListFileSharesRequest
{
    public required XAmzTarget54 XAmzTarget { get; init; }
}
