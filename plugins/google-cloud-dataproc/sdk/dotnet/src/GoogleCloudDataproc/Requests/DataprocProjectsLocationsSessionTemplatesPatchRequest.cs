using GoogleCloudDataproc.Models;

namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the DataprocProjectsLocationsSessionTemplatesPatch operation.
/// </summary>
public sealed record DataprocProjectsLocationsSessionTemplatesPatchRequest
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
    /// Resource name segment (sessionTemplatesId).
    /// </summary>
    public required string SessionTemplatesId { get; init; }

    public required SessionTemplate Body { get; init; }
}
