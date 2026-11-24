using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.Operations;

/// <summary>
/// The inputs of the EvictFilesFailingUpload operation.
/// </summary>
public sealed record EvictFilesFailingUploadRequest
{
    public required XAmzTarget2AwsStorageGatewayOperationsApi XAmzTarget { get; init; }
}
