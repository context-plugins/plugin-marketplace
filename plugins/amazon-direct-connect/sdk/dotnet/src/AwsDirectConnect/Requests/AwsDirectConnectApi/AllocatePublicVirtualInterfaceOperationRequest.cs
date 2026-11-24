using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the AllocatePublicVirtualInterface operation.
/// </summary>
public sealed record AllocatePublicVirtualInterfaceOperationRequest
{
    public required XAmzTarget7 XAmzTarget { get; init; }
}
