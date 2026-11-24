using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the AddWorkingStorage operation.
/// </summary>
public sealed record AddWorkingStorageRequest
{
    public required XAmzTarget16 XAmzTarget { get; init; }
}
