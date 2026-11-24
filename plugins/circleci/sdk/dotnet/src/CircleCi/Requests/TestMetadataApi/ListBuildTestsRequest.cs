using CircleCi.Models.Enums;

namespace CircleCi.Requests.TestMetadataApi;

/// <summary>
/// The inputs of the ListBuildTests operation.
/// </summary>
public sealed record ListBuildTestsRequest
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
    /// The build number
    /// </summary>
    public required int BuildNum { get; init; }
}
