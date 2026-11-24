using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the CreatePublicVirtualInterface operation.
/// </summary>
public sealed record CreatePublicVirtualInterfaceOperationRequest
{
    public required XAmzTarget46 XAmzTarget { get; init; }
}
