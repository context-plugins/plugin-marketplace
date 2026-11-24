using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the ConfirmTransitVirtualInterface operation.
/// </summary>
public sealed record ConfirmTransitVirtualInterfaceOperationRequest
{
    public required XAmzTarget13 XAmzTarget { get; init; }
}
