using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the UpdateGatewaySoftwareNow operation.
/// </summary>
public sealed record UpdateGatewaySoftwareNowRequest
{
    public required XAmzTarget81 XAmzTarget { get; init; }
}
