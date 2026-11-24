using Bitbucket.Models.AllOf;

namespace Bitbucket.Requests.Ssh;

/// <summary>
/// The inputs of the PostUsersBySelectedUserSshKeys operation.
/// </summary>
public sealed record PostUsersBySelectedUserSshKeysRequest
{
    /// <summary>
    /// This can either be an Atlassian Account ID OR the UUID of the account,
    /// surrounded by curly-braces, for example: <c>{account UUID}</c>.
    /// </summary>
    public required string SelectedUser { get; init; }

    /// <summary>
    /// The date or date-time of when the key will expire,
    /// in <see href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</see> format.
    /// Example: <c>YYYY-MM-DDTHH:mm:ss.sssZ</c>
    /// </summary>
    public string? ExpiresOn { get; init; }

    /// <summary>
    /// The new SSH key object. Note that the username property has been deprecated due to <see href="https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis">privacy changes</see>.
    /// </summary>
    public SshAccountKey? Body { get; init; }
}
