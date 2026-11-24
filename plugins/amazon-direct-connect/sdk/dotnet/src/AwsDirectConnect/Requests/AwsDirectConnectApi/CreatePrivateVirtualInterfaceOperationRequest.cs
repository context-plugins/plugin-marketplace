using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the CreatePrivateVirtualInterface operation.
/// </summary>
public sealed record CreatePrivateVirtualInterfaceOperationRequest
{
    public required XAmzTarget45 XAmzTarget { get; init; }
}
