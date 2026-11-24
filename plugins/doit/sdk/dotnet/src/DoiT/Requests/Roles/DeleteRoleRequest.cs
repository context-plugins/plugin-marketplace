namespace DoiT.Requests.Roles;

/// <summary>
/// The inputs of the DeleteRole operation.
/// </summary>
public sealed record DeleteRoleRequest
{
    /// <summary>
    /// The unique ID of the role to delete.
    /// </summary>
    public required string Id { get; init; }
}
