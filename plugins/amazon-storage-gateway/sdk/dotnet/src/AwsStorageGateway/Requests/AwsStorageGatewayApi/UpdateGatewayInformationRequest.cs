using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the UpdateGatewayInformation operation.
/// </summary>
public sealed record UpdateGatewayInformationRequest
{
    public required XAmzTarget70 XAmzTarget { get; init; }
}
