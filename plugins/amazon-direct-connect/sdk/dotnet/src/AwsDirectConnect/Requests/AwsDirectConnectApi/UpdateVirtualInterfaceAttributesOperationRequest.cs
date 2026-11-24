using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the UpdateVirtualInterfaceAttributes operation.
/// </summary>
public sealed record UpdateVirtualInterfaceAttributesOperationRequest
{
    public required XAmzTarget62 XAmzTarget { get; init; }
}
