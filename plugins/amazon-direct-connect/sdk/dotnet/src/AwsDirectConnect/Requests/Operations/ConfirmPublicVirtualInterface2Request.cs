using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.Operations;

/// <summary>
/// The inputs of the ConfirmPublicVirtualInterface2 operation.
/// </summary>
public sealed record ConfirmPublicVirtualInterface2Request
{
    public required XAmzTarget8AwsDirectConnectOperationsApi XAmzTarget { get; init; }
}
