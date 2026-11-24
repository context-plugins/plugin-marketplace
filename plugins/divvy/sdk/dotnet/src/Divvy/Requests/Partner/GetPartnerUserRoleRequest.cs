using System.ComponentModel.DataAnnotations;

namespace Divvy.Requests.Partner;

/// <summary>
/// The inputs of the GetPartnerUserRole operation.
/// </summary>
public sealed record GetPartnerUserRoleRequest
{
    [MinLength(1)]
    public required string RoleId { get; init; }

    public string? SessionId { get; init; }

    public string? AppKey { get; init; }

    public string? OrganizationId { get; init; }
}
