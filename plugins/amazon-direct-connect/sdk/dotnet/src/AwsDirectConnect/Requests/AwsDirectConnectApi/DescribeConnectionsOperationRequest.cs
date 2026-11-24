using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the DescribeConnections operation.
/// </summary>
public sealed record DescribeConnectionsOperationRequest
{
    public required XAmzTarget17 XAmzTarget { get; init; }
}
