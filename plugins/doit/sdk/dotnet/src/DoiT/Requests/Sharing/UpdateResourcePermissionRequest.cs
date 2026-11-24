using DoiT.Models;
using DoiT.Models.Enums;

namespace DoiT.Requests.Sharing;

/// <summary>
/// The inputs of the UpdateResourcePermission operation.
/// </summary>
public sealed record UpdateResourcePermissionRequest
{
    /// <summary>
    /// Resource type.
    /// </summary>
    public required ResourceType ResourceType { get; init; }

    /// <summary>
    /// Resource ID. See <see href="https://developer.doit.com/docs/resource-ids">Resource IDs</see>.
    /// </summary>
    public required string ResourceId { get; init; }

    public SharingV1Request? Body { get; init; }
}
