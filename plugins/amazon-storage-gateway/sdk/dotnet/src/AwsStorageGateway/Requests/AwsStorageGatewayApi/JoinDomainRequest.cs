using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the JoinDomain operation.
/// </summary>
public sealed record JoinDomainRequest
{
    public required XAmzTarget2AwsStorageGatewayAwsStorageGatewayApi XAmzTarget { get; init; }
}
