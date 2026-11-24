using DoiT.Models.Enums;

namespace DoiT.Requests.Sharing;

/// <summary>
/// The inputs of the GetResourcePermission operation.
/// </summary>
public sealed record GetResourcePermissionRequest
{
    /// <summary>
    /// Resource type.
    /// </summary>
    public required ResourceType ResourceType { get; init; }

    /// <summary>
    /// Resource ID. See <see href="https://developer.doit.com/docs/resource-ids">Resource IDs</see>.
    /// </summary>
    public required string ResourceId { get; init; }
}
