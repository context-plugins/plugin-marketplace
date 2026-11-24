using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the DescribeDirectConnectGatewayAttachments operation.
/// </summary>
public sealed record DescribeDirectConnectGatewayAttachmentsOperationRequest
{
    public required XAmzTarget50 XAmzTarget { get; init; }
}
