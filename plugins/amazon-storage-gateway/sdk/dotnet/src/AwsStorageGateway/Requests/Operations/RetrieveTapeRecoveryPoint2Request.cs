using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.Operations;

/// <summary>
/// The inputs of the RetrieveTapeRecoveryPoint2 operation.
/// </summary>
public sealed record RetrieveTapeRecoveryPoint2Request
{
    public required XAmzTarget7AwsStorageGatewayOperationsApi XAmzTarget { get; init; }
}
