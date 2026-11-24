using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the RetrieveTapeRecoveryPoint operation.
/// </summary>
public sealed record RetrieveTapeRecoveryPointRequest
{
    public required XAmzTarget6 XAmzTarget { get; init; }
}
