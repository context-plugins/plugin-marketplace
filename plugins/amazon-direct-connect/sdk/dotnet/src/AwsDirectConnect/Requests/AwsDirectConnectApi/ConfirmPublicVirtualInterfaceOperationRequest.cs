using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the ConfirmPublicVirtualInterface operation.
/// </summary>
public sealed record ConfirmPublicVirtualInterfaceOperationRequest
{
    public required XAmzTarget12 XAmzTarget { get; init; }
}
