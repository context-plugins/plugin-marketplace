using System.ComponentModel.DataAnnotations;
using Divvy.Models;

namespace Divvy.Requests.OrganizationUsers;

/// <summary>
/// The inputs of the UpdateOrganizationUser operation.
/// </summary>
public sealed record UpdateOrganizationUserRequest
{
    [MinLength(1)]
    public required string UserId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required OrganizationUserUpdateRequestDto Body { get; init; }
}
