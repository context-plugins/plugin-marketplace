using DoiT.Models;

namespace DoiT.Requests.Roles;

/// <summary>
/// The inputs of the UpdateRole operation.
/// </summary>
public sealed record UpdateRoleOperationRequest
{
    /// <summary>
    /// The unique ID of the role to update.
    /// </summary>
    public required string Id { get; init; }

    public required UpdateRoleRequest Body { get; init; }
}
