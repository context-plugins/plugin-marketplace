namespace Bitbucket.Requests.Gpg;

/// <summary>
/// The inputs of the GetUsersBySelectedUserGpgKeysByFingerprint operation.
/// </summary>
public sealed record GetUsersBySelectedUserGpgKeysByFingerprintRequest
{
    /// <summary>
    /// A GPG key fingerprint.
    /// </summary>
    public required string Fingerprint { get; init; }

    /// <summary>
    /// This can either be an Atlassian Account ID OR the UUID of the account,
    /// surrounded by curly-braces, for example: <c>{account UUID}</c>.
    /// </summary>
    public required string SelectedUser { get; init; }
}
