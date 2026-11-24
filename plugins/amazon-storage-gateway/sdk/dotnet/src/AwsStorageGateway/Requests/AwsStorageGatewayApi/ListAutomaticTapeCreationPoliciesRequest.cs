using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the ListAutomaticTapeCreationPolicies operation.
/// </summary>
public sealed record ListAutomaticTapeCreationPoliciesRequest
{
    public required XAmzTarget45 XAmzTarget { get; init; }
}
