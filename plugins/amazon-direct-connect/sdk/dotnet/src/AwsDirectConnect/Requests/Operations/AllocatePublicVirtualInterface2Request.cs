using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.Operations;

/// <summary>
/// The inputs of the AllocatePublicVirtualInterface2 operation.
/// </summary>
public sealed record AllocatePublicVirtualInterface2Request
{
    public required XAmzTarget3AwsDirectConnectOperationsApi XAmzTarget { get; init; }
}
