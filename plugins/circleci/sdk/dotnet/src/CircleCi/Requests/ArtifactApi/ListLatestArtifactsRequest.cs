using CircleCi.Models.Enums;

namespace CircleCi.Requests.ArtifactApi;

/// <summary>
/// The inputs of the ListLatestArtifacts operation.
/// </summary>
public sealed record ListLatestArtifactsRequest
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

    /// <summary>
    /// Filter artifacts by branch name
    /// </summary>
    public string? Branch { get; init; }

    /// <summary>
    /// Filter artifacts by status
    /// </summary>
    public Filter? Filter { get; init; }
}
