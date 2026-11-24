using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.Operations;

/// <summary>
/// The inputs of the ConfirmTransitVirtualInterface2 operation.
/// </summary>
public sealed record ConfirmTransitVirtualInterface2Request
{
    public required XAmzTarget9AwsDirectConnectOperationsApi XAmzTarget { get; init; }
}
