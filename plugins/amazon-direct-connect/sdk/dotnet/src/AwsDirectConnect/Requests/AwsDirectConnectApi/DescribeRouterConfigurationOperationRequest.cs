using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the DescribeRouterConfiguration operation.
/// </summary>
public sealed record DescribeRouterConfigurationOperationRequest
{
    public required XAmzTarget54 XAmzTarget { get; init; }
}
