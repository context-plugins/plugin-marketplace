using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the AllocatePrivateVirtualInterface operation.
/// </summary>
public sealed record AllocatePrivateVirtualInterfaceOperationRequest
{
    public required XAmzTarget6 XAmzTarget { get; init; }
}
