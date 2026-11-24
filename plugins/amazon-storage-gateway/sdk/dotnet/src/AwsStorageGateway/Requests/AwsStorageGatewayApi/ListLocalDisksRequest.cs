using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the ListLocalDisks operation.
/// </summary>
public sealed record ListLocalDisksRequest
{
    public required XAmzTarget76 XAmzTarget { get; init; }
}
