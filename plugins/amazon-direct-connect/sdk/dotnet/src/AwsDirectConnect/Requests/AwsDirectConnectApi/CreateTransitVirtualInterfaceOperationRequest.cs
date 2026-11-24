using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the CreateTransitVirtualInterface operation.
/// </summary>
public sealed record CreateTransitVirtualInterfaceOperationRequest
{
    public required XAmzTarget47 XAmzTarget { get; init; }
}
