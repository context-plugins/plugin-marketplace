using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the ConfirmPrivateVirtualInterface operation.
/// </summary>
public sealed record ConfirmPrivateVirtualInterfaceOperationRequest
{
    public required XAmzTarget11 XAmzTarget { get; init; }
}
