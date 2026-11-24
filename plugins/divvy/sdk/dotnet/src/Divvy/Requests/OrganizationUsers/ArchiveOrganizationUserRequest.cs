using System.ComponentModel.DataAnnotations;

namespace Divvy.Requests.OrganizationUsers;

/// <summary>
/// The inputs of the ArchiveOrganizationUser operation.
/// </summary>
public sealed record ArchiveOrganizationUserRequest
{
    [MinLength(1)]
    public required string UserId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
