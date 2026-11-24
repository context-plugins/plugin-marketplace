using Apigee.Models;

namespace Apigee.Requests.Projects;

/// <summary>
/// The inputs of the ApihubProjectsLocationsCollectApiData operation.
/// </summary>
public sealed record ApihubProjectsLocationsCollectApiDataRequest
{
    /// <summary>
    /// Resource name segment (projectsId).
    /// </summary>
    public required string ProjectsId { get; init; }

    /// <summary>
    /// Resource name segment (locationsId).
    /// </summary>
    public required string LocationsId { get; init; }

    public required GoogleCloudApihubV1CollectApiDataRequest Body { get; init; }
}
