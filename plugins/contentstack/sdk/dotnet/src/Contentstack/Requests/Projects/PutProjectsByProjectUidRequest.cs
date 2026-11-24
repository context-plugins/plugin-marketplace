using Contentstack.Models;

namespace Contentstack.Requests.Projects;

/// <summary>
/// The inputs of the PutProjectsByProjectUid operation.
/// </summary>
public sealed record PutProjectsByProjectUidRequest
{
    /// <summary>
    /// The unique identifier of the Launch project.
    /// </summary>
    public required string ProjectUid { get; init; }

    public required CreateProjectRequest2 Body { get; init; }
}
