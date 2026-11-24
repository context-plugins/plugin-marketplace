namespace DoiT.Requests.Roles;

/// <summary>
/// The inputs of the GetRole operation.
/// </summary>
public sealed record GetRoleRequest
{
    /// <summary>
    /// The unique ID of the role.
    /// </summary>
    public required string Id { get; init; }
}
