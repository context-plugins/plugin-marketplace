using Bitbucket.Models.AllOf;

namespace Bitbucket.Requests.Gpg;

/// <summary>
/// The inputs of the PostUsersBySelectedUserGpgKeys operation.
/// </summary>
public sealed record PostUsersBySelectedUserGpgKeysRequest
{
    /// <summary>
    /// This can either be an Atlassian Account ID OR the UUID of the account,
    /// surrounded by curly-braces, for example: <c>{account UUID}</c>.
    /// </summary>
    public required string SelectedUser { get; init; }

    /// <summary>
    /// The new GPG key object.
    /// </summary>
    public GpgAccountKey? Body { get; init; }
}
