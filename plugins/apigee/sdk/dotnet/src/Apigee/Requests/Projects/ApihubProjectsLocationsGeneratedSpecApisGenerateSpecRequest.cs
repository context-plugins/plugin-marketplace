using Apigee.Models;

namespace Apigee.Requests.Projects;

/// <summary>
/// The inputs of the ApihubProjectsLocationsGeneratedSpecApisGenerateSpec operation.
/// </summary>
public sealed record ApihubProjectsLocationsGeneratedSpecApisGenerateSpecRequest
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
    /// Resource name segment (generatedSpecApisId).
    /// </summary>
    public required string GeneratedSpecApisId { get; init; }

    public required GoogleCloudApihubV1GenerateSpecRequest Body { get; init; }
}
