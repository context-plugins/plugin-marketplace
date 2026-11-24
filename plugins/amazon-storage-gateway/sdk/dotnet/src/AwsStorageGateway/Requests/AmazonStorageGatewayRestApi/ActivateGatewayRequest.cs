using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AmazonStorageGatewayRestApi;

/// <summary>
/// The inputs of the ActivateGateway operation.
/// </summary>
public sealed record ActivateGatewayRequest
{
    public required XAmzTarget XAmzTarget { get; init; }
}
