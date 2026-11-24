using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the DescribeTags operation.
/// </summary>
public sealed record DescribeTagsOperationRequest
{
    public required XAmzTarget55 XAmzTarget { get; init; }
}
