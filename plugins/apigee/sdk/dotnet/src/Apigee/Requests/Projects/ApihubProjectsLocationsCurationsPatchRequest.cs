using Apigee.Models;

namespace Apigee.Requests.Projects;

/// <summary>
/// The inputs of the ApihubProjectsLocationsCurationsPatch operation.
/// </summary>
public sealed record ApihubProjectsLocationsCurationsPatchRequest
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
    /// Resource name segment (curationsId).
    /// </summary>
    public required string CurationsId { get; init; }

    /// <summary>
    /// Optional. The list of fields to update.
    /// </summary>
    public string? UpdateMask { get; init; }

    public required GoogleCloudApihubV1Curation Body { get; init; }
}
