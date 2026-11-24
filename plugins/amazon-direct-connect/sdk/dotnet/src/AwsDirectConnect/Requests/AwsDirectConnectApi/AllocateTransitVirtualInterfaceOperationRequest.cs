using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the AllocateTransitVirtualInterface operation.
/// </summary>
public sealed record AllocateTransitVirtualInterfaceOperationRequest
{
    public required XAmzTarget8 XAmzTarget { get; init; }
}
