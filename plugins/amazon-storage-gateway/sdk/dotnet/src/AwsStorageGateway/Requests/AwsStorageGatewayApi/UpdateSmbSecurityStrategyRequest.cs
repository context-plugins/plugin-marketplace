using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the UpdateSmbSecurityStrategy operation.
/// </summary>
public sealed record UpdateSmbSecurityStrategyRequest
{
    public required XAmzTarget84 XAmzTarget { get; init; }
}
