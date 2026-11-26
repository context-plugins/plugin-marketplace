using System.ComponentModel.DataAnnotations;

namespace Bill.Requests.OrganizationUsers;

/// <summary>
/// The inputs of the RestoreOrganizationUser operation.
/// </summary>
public sealed record RestoreOrganizationUserRequest
{
    [MinLength(1)]
    public required string UserId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
