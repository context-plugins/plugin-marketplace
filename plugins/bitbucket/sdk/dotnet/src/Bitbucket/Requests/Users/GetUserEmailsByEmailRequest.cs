namespace Bitbucket.Requests.Users;

/// <summary>
/// The inputs of the GetUserEmailsByEmail operation.
/// </summary>
public sealed record GetUserEmailsByEmailRequest
{
    /// <summary>
    /// Email address of the user.
    /// </summary>
    public required string Email { get; init; }
}
