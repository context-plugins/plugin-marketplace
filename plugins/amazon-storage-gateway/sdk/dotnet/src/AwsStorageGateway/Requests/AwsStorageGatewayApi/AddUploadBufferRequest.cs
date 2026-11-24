using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the AddUploadBuffer operation.
/// </summary>
public sealed record AddUploadBufferRequest
{
    public required XAmzTarget14 XAmzTarget { get; init; }
}
