using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the DescribeLoa operation.
/// </summary>
public sealed record DescribeLoaOperationRequest
{
    public required XAmzTarget52 XAmzTarget { get; init; }
}
