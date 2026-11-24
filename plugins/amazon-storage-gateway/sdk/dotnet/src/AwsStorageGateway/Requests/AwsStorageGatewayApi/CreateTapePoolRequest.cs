using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the CreateTapePool operation.
/// </summary>
public sealed record CreateTapePoolRequest
{
    public required XAmzTarget36 XAmzTarget { get; init; }
}
