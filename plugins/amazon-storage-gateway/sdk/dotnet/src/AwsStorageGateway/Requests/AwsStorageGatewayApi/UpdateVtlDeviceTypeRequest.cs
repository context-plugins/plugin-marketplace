using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the UpdateVtlDeviceType operation.
/// </summary>
public sealed record UpdateVtlDeviceTypeRequest
{
    public required XAmzTarget85 XAmzTarget { get; init; }
}
