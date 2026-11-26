using Bill.Core.Validation.Attributes;

namespace Bill.Requests.Roles;

/// <summary>
/// The inputs of the ListOrganizationUserRoles operation.
/// </summary>
public sealed record ListOrganizationUserRolesRequest
{
    [Minimum(1)]
    [Maximum(100)]
    public int? Max { get; init; }

    public string? Sort { get; init; }

    public string? Filters { get; init; }

    public string? Page { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
