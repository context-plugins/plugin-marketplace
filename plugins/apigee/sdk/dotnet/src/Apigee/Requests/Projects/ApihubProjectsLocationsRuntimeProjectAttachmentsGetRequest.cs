namespace Apigee.Requests.Projects;

/// <summary>
/// The inputs of the ApihubProjectsLocationsRuntimeProjectAttachmentsGet operation.
/// </summary>
public sealed record ApihubProjectsLocationsRuntimeProjectAttachmentsGetRequest
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
    /// Resource name segment (runtimeProjectAttachmentsId).
    /// </summary>
    public required string RuntimeProjectAttachmentsId { get; init; }
}
