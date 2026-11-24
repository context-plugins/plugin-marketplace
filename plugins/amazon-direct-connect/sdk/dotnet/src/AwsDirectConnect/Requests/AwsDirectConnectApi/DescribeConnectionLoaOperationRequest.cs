using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the DescribeConnectionLoa operation.
/// </summary>
public sealed record DescribeConnectionLoaOperationRequest
{
    public required XAmzTarget48 XAmzTarget { get; init; }
}
