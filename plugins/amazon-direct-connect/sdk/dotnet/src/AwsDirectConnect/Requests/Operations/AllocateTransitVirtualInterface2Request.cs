using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.Operations;

/// <summary>
/// The inputs of the AllocateTransitVirtualInterface2 operation.
/// </summary>
public sealed record AllocateTransitVirtualInterface2Request
{
    public required XAmzTarget4AwsDirectConnectOperationsApi XAmzTarget { get; init; }
}
