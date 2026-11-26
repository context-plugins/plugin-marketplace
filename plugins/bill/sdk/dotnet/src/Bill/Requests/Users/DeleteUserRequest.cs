using System.ComponentModel.DataAnnotations;

namespace Bill.Requests.Users;

/// <summary>
/// The inputs of the DeleteUser operation.
/// </summary>
public sealed record DeleteUserRequest
{
    [MinLength(1)]
    public required string UserId { get; init; }

    public string? ApiToken { get; init; }
}
