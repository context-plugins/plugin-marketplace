using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the DescribeSmbFileShares operation.
/// </summary>
public sealed record DescribeSmbFileSharesRequest
{
    public required XAmzTarget30 XAmzTarget { get; init; }
}
