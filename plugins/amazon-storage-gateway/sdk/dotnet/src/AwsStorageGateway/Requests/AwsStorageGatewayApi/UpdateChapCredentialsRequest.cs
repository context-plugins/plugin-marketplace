using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the UpdateChapCredentials operation.
/// </summary>
public sealed record UpdateChapCredentialsRequest
{
    public required XAmzTarget52 XAmzTarget { get; init; }
}
