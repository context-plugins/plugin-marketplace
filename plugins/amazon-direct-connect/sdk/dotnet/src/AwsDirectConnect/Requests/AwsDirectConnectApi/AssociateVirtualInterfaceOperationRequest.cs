using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the AssociateVirtualInterface operation.
/// </summary>
public sealed record AssociateVirtualInterfaceOperationRequest
{
    public required XAmzTarget25 XAmzTarget { get; init; }
}
