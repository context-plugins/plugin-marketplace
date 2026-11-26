using System.ComponentModel.DataAnnotations;

namespace Bill.Requests.Roles;

/// <summary>
/// The inputs of the GetOrganizationUserRole operation.
/// </summary>
public sealed record GetOrganizationUserRoleRequest
{
    [MinLength(1)]
    public required string RoleId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
