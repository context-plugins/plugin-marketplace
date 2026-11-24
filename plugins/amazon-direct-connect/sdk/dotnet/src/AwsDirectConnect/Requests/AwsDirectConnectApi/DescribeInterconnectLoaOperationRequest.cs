using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the DescribeInterconnectLoa operation.
/// </summary>
public sealed record DescribeInterconnectLoaOperationRequest
{
    public required XAmzTarget51 XAmzTarget { get; init; }
}
