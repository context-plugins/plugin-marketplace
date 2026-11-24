using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the DeleteAutomaticTapeCreationPolicy operation.
/// </summary>
public sealed record DeleteAutomaticTapeCreationPolicyRequest
{
    public required XAmzTarget44 XAmzTarget { get; init; }
}
