using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the DescribeTapeRecoveryPoints operation.
/// </summary>
public sealed record DescribeTapeRecoveryPointsRequest
{
    public required XAmzTarget74 XAmzTarget { get; init; }
}
