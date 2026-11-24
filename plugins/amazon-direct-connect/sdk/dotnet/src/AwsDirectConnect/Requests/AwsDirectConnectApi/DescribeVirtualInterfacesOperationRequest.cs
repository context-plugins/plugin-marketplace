using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the DescribeVirtualInterfaces operation.
/// </summary>
public sealed record DescribeVirtualInterfacesOperationRequest
{
    public required XAmzTarget27 XAmzTarget { get; init; }
}
