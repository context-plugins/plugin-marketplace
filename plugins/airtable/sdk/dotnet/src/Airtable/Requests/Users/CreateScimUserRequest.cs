using Airtable.Models;

namespace Airtable.Requests.Users;

/// <summary>
/// The inputs of the CreateScimUser operation.
/// </summary>
public sealed record CreateScimUserRequest
{
    public required ScimUserCreateRequest Body { get; init; }
}
