namespace Bitbucket.Requests.Ssh;

/// <summary>
/// The inputs of the DeleteUsersBySelectedUserSshKeysByKeyId operation.
/// </summary>
public sealed record DeleteUsersBySelectedUserSshKeysByKeyIdRequest
{
    /// <summary>
    /// The SSH key's UUID value.
    /// </summary>
    public required string KeyId { get; init; }

    /// <summary>
    /// This can either be an Atlassian Account ID OR the UUID of the account,
    /// surrounded by curly-braces, for example: <c>{account UUID}</c>.
    /// </summary>
    public required string SelectedUser { get; init; }
}
