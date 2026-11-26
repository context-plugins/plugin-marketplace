using System.ComponentModel.DataAnnotations;

namespace Bill.Requests.Users;

/// <summary>
/// The inputs of the GetUser operation.
/// </summary>
public sealed record GetUserRequest
{
    [MinLength(1)]
    public required string UserId { get; init; }

    public string? ApiToken { get; init; }
}
