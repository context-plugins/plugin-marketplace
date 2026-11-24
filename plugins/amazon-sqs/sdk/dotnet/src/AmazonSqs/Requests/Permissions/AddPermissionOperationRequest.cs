using AmazonSqs.Models.Enums;

namespace AmazonSqs.Requests.Permissions;

/// <summary>
/// The inputs of the AddPermission operation.
/// </summary>
public sealed record AddPermissionOperationRequest
{
    public required XAmzTargetAmazonSimpleQueueServicePermissionsApi XAmzTarget { get; init; }
}
