using CircleCi.Models.Enums;

namespace CircleCi.Requests.SshKey;

/// <summary>
/// The inputs of the ListCheckoutKeys2 operation.
/// </summary>
public sealed record ListCheckoutKeys2Request
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
}
