using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the CreateTapes operation.
/// </summary>
public sealed record CreateTapesRequest
{
    public required XAmzTarget39 XAmzTarget { get; init; }
}
