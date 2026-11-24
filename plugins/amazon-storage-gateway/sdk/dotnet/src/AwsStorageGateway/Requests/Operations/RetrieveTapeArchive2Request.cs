using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.Operations;

/// <summary>
/// The inputs of the RetrieveTapeArchive2 operation.
/// </summary>
public sealed record RetrieveTapeArchive2Request
{
    public required XAmzTarget6AwsStorageGatewayOperationsApi XAmzTarget { get; init; }
}
