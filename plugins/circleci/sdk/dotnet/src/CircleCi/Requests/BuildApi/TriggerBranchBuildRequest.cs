using CircleCi.Models;
using CircleCi.Models.Enums;

namespace CircleCi.Requests.BuildApi;

/// <summary>
/// The inputs of the TriggerBranchBuild operation.
/// </summary>
public sealed record TriggerBranchBuildRequest
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
    /// The branch to build
    /// </summary>
    public required string Branch { get; init; }

    public ProjectProjectTreeBranchRequest? Body { get; init; }
}
