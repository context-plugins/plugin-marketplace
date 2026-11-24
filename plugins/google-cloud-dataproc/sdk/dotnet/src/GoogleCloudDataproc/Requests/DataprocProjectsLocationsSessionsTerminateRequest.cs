using GoogleCloudDataproc.Models;

namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the DataprocProjectsLocationsSessionsTerminate operation.
/// </summary>
public sealed record DataprocProjectsLocationsSessionsTerminateRequest
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
    /// Resource name segment (sessionsId).
    /// </summary>
    public required string SessionsId { get; init; }

    public required TerminateSessionRequest Body { get; init; }
}
