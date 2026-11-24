using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the DescribeConnectionsOnInterconnect operation.
/// </summary>
public sealed record DescribeConnectionsOnInterconnectOperationRequest
{
    public required XAmzTarget18 XAmzTarget { get; init; }
}
