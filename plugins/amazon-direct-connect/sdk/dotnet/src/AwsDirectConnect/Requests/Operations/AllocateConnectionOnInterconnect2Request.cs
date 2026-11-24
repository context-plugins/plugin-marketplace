using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.Operations;

/// <summary>
/// The inputs of the AllocateConnectionOnInterconnect2 operation.
/// </summary>
public sealed record AllocateConnectionOnInterconnect2Request
{
    public required XAmzTargetAwsDirectConnectOperationsApi XAmzTarget { get; init; }
}
