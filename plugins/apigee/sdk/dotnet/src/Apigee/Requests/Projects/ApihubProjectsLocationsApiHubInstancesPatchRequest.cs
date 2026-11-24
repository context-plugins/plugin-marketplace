using Apigee.Models;

namespace Apigee.Requests.Projects;

/// <summary>
/// The inputs of the ApihubProjectsLocationsApiHubInstancesPatch operation.
/// </summary>
public sealed record ApihubProjectsLocationsApiHubInstancesPatchRequest
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
    /// Resource name segment (apiHubInstancesId).
    /// </summary>
    public required string ApiHubInstancesId { get; init; }

    /// <summary>
    /// Optional. The list of fields to update.
    /// </summary>
    public string? UpdateMask { get; init; }

    public required GoogleCloudApihubV1ApiHubInstance Body { get; init; }
}
