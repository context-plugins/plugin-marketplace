using DoiT.Core.Validation;
using DoiT.Core.Validation.Attributes;

namespace DoiT.Requests.Users;

/// <summary>
/// The inputs of the ListUsers operation.
/// </summary>
public sealed record ListUsersRequest
{
    /// <summary>
    /// Filter by exact email address. When provided, returns at most one user matching this email. The email is matched case-insensitively.
    /// </summary>
    [Format(FormatKind.Email)]
    public string? Email { get; init; }
}
