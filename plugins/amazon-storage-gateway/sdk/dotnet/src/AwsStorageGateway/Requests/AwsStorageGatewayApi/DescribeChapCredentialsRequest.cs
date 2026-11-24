using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the DescribeChapCredentials operation.
/// </summary>
public sealed record DescribeChapCredentialsRequest
{
    public required XAmzTarget51 XAmzTarget { get; init; }
}
