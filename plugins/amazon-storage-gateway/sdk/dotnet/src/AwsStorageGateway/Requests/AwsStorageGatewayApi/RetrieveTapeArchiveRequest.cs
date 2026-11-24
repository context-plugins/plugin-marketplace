using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the RetrieveTapeArchive operation.
/// </summary>
public sealed record RetrieveTapeArchiveRequest
{
    public required XAmzTarget5 XAmzTarget { get; init; }
}
