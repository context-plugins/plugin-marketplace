using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.Operations;

/// <summary>
/// The inputs of the AllocatePrivateVirtualInterface2 operation.
/// </summary>
public sealed record AllocatePrivateVirtualInterface2Request
{
    public required XAmzTarget2AwsDirectConnectOperationsApi XAmzTarget { get; init; }
}
