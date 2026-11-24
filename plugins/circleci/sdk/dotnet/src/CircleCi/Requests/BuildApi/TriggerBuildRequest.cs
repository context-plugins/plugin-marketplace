using CircleCi.Models;
using CircleCi.Models.Enums;

namespace CircleCi.Requests.BuildApi;

/// <summary>
/// The inputs of the TriggerBuild operation.
/// </summary>
public sealed record TriggerBuildRequest
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

    public ProjectProjectRequest? Body { get; init; }
}
