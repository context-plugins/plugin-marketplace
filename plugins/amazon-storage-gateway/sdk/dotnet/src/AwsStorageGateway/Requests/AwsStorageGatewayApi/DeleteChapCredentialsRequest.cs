using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the DeleteChapCredentials operation.
/// </summary>
public sealed record DeleteChapCredentialsRequest
{
    public required XAmzTarget50 XAmzTarget { get; init; }
}
