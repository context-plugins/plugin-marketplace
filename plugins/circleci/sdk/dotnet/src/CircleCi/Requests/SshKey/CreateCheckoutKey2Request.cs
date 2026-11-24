using CircleCi.Models;
using CircleCi.Models.Enums;

namespace CircleCi.Requests.SshKey;

/// <summary>
/// The inputs of the CreateCheckoutKey2 operation.
/// </summary>
public sealed record CreateCheckoutKey2Request
{
    /// <summary>
    /// The version control system type
    /// </summary>
    public required VcsType VcsType { get; init; }

    /// <summary>
    /// The organization or user name
    /// </summary>
    public required string Username { get; init; }

    /// <summary>
    /// The repository name
    /// </summary>
    public required string Project { get; init; }

    public required ProjectProjectCheckoutKeyRequest Body { get; init; }
}
