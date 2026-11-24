using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the UpdateAutomaticTapeCreationPolicy operation.
/// </summary>
public sealed record UpdateAutomaticTapeCreationPolicyRequest
{
    public required XAmzTarget46 XAmzTarget { get; init; }
}
