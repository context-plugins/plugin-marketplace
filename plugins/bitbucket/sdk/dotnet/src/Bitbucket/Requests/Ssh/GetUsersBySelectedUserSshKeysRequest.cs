namespace Bitbucket.Requests.Ssh;

/// <summary>
/// The inputs of the GetUsersBySelectedUserSshKeys operation.
/// </summary>
public sealed record GetUsersBySelectedUserSshKeysRequest
{
    /// <summary>
    /// This can either be an Atlassian Account ID OR the UUID of the account,
    /// surrounded by curly-braces, for example: <c>{account UUID}</c>.
    /// </summary>
    public required string SelectedUser { get; init; }
}
