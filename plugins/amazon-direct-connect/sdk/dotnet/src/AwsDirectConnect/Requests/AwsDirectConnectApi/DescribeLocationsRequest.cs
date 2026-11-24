using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the DescribeLocations operation.
/// </summary>
public sealed record DescribeLocationsRequest
{
    public required XAmzTarget53 XAmzTarget { get; init; }
}
