using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the DescribeCustomerMetadata operation.
/// </summary>
public sealed record DescribeCustomerMetadataRequest
{
    public required XAmzTarget49 XAmzTarget { get; init; }
}
