using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.Operations;

/// <summary>
/// The inputs of the JoinDomain2 operation.
/// </summary>
public sealed record JoinDomain2Request
{
    public required XAmzTarget3AwsStorageGatewayOperationsApi XAmzTarget { get; init; }
}
