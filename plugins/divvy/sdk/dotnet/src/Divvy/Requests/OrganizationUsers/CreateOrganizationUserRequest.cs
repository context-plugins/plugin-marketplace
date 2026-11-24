using Divvy.Models;

namespace Divvy.Requests.OrganizationUsers;

/// <summary>
/// The inputs of the CreateOrganizationUser operation.
/// </summary>
public sealed record CreateOrganizationUserRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required OrganizationUserCreateRequestDto Body { get; init; }
}
