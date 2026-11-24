using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the ListVolumeInitiators operation.
/// </summary>
public sealed record ListVolumeInitiatorsRequest
{
    public required XAmzTarget77 XAmzTarget { get; init; }
}
