using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the ListTapePools operation.
/// </summary>
public sealed record ListTapePoolsRequest
{
    public required XAmzTarget38 XAmzTarget { get; init; }
}
