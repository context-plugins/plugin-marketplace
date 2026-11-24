using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the DescribeLags operation.
/// </summary>
public sealed record DescribeLagsOperationRequest
{
    public required XAmzTarget43 XAmzTarget { get; init; }
}
