using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the DescribeHostedConnections operation.
/// </summary>
public sealed record DescribeHostedConnectionsOperationRequest
{
    public required XAmzTarget22 XAmzTarget { get; init; }
}
