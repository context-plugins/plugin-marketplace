using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the ListTapes operation.
/// </summary>
public sealed record ListTapesRequest
{
    public required XAmzTarget43 XAmzTarget { get; init; }
}
