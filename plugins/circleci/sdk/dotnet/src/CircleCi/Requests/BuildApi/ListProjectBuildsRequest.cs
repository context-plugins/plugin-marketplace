using CircleCi.Core.Validation.Attributes;
using CircleCi.Models.Enums;

namespace CircleCi.Requests.BuildApi;

/// <summary>
/// The inputs of the ListProjectBuilds operation.
/// </summary>
public sealed record ListProjectBuildsRequest
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
    /// Filter builds by status
    /// </summary>
    public FilterCircleCiRestApiV1BuildApi? Filter { get; init; }

    /// <summary>
    /// Number of builds to return (max 100)
    /// </summary>
    [Minimum(1)]
    [Maximum(100)]
    public int Limit { get; init; } = 30;

    /// <summary>
    /// Offset for pagination
    /// </summary>
    [Minimum(0)]
    public int? Offset { get; init; }
}
