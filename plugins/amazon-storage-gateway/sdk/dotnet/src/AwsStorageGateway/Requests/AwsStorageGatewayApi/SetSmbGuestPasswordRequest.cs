using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the SetSmbGuestPassword operation.
/// </summary>
public sealed record SetSmbGuestPasswordRequest
{
    public required XAmzTarget80 XAmzTarget { get; init; }
}
