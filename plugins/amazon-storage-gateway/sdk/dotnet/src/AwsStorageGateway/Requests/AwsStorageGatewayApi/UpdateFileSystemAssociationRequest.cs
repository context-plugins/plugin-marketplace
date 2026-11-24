using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the UpdateFileSystemAssociation operation.
/// </summary>
public sealed record UpdateFileSystemAssociationRequest
{
    public required XAmzTarget69 XAmzTarget { get; init; }
}
