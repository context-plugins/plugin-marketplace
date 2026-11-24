using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the DescribeInterconnects operation.
/// </summary>
public sealed record DescribeInterconnectsOperationRequest
{
    public required XAmzTarget40 XAmzTarget { get; init; }
}
