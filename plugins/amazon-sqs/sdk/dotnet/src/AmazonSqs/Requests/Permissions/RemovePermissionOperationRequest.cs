using AmazonSqs.Models.Enums;

namespace AmazonSqs.Requests.Permissions;

/// <summary>
/// The inputs of the RemovePermission operation.
/// </summary>
public sealed record RemovePermissionOperationRequest
{
    public required XAmzTarget1AmazonSimpleQueueServicePermissionsApi XAmzTarget { get; init; }
}
