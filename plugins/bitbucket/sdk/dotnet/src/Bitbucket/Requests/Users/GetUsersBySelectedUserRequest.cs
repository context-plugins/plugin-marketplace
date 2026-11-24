namespace Bitbucket.Requests.Users;

/// <summary>
/// The inputs of the GetUsersBySelectedUser operation.
/// </summary>
public sealed record GetUsersBySelectedUserRequest
{
    /// <summary>
    /// This can either be an Atlassian Account ID OR the UUID of the account,
    /// surrounded by curly-braces, for example: <c>{account UUID}</c>.
    /// </summary>
    public required string SelectedUser { get; init; }
}
