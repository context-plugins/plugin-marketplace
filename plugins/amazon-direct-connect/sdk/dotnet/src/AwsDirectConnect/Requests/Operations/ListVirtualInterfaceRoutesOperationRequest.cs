using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.Operations;

/// <summary>
/// The inputs of the ListVirtualInterfaceRoutes operation.
/// </summary>
public sealed record ListVirtualInterfaceRoutesOperationRequest
{
    public required XAmzTarget13AwsDirectConnectOperationsApi XAmzTarget { get; init; }
}
