using Contentstack.Models;

namespace Contentstack.Requests.Projects;

/// <summary>
/// The inputs of the PostProjects operation.
/// </summary>
public sealed record PostProjectsRequest
{
    public required CreateProjectRequest2 Body { get; init; }
}
