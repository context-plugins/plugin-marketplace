using System.ComponentModel.DataAnnotations;
using Bill.Models;

namespace Bill.Requests.Users;

/// <summary>
/// The inputs of the UpdateUser operation.
/// </summary>
public sealed record UpdateUserRequest
{
    [MinLength(1)]
    public required string UserId { get; init; }

    public string? ApiToken { get; init; }

    public required UpdateUserRequestDto Body { get; init; }
}
