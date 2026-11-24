using Apigee.Models;

namespace Apigee.Requests.Projects;

/// <summary>
/// The inputs of the ApihubProjectsLocationsDependenciesPatch operation.
/// </summary>
public sealed record ApihubProjectsLocationsDependenciesPatchRequest
{
    /// <summary>
    /// Resource name segment (projectsId).
    /// </summary>
    public required string ProjectsId { get; init; }

    /// <summary>
    /// Resource name segment (locationsId).
    /// </summary>
    public required string LocationsId { get; init; }

    /// <summary>
    /// Resource name segment (dependenciesId).
    /// </summary>
    public required string DependenciesId { get; init; }

    /// <summary>
    /// Required. The list of fields to update.
    /// </summary>
    public string? UpdateMask { get; init; }

    public required GoogleCloudApihubV1Dependency Body { get; init; }
}
