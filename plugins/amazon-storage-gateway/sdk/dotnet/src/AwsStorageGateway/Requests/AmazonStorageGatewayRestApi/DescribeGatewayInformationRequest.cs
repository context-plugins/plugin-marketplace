using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AmazonStorageGatewayRestApi;

/// <summary>
/// The inputs of the DescribeGatewayInformation operation.
/// </summary>
public sealed record DescribeGatewayInformationRequest
{
    public required XAmzTarget4 XAmzTarget { get; init; }
}
