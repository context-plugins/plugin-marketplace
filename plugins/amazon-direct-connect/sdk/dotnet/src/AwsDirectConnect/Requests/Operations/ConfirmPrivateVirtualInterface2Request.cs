using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.Operations;

/// <summary>
/// The inputs of the ConfirmPrivateVirtualInterface2 operation.
/// </summary>
public sealed record ConfirmPrivateVirtualInterface2Request
{
    public required XAmzTarget7AwsDirectConnectOperationsApi XAmzTarget { get; init; }
}
