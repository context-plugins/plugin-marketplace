using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the DeleteTapeArchive operation.
/// </summary>
public sealed record DeleteTapeArchiveRequest
{
    public required XAmzTarget61 XAmzTarget { get; init; }
}
