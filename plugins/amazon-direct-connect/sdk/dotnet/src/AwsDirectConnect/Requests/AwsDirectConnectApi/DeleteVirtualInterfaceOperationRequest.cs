using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the DeleteVirtualInterface operation.
/// </summary>
public sealed record DeleteVirtualInterfaceOperationRequest
{
    public required XAmzTarget26 XAmzTarget { get; init; }
}
