namespace GoogleCloudSpeechToText.Requests.Projects;

/// <summary>
/// The inputs of the SpeechProjectsLocationsCustomClassesList operation.
/// </summary>
public sealed record SpeechProjectsLocationsCustomClassesListRequest
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
    /// The maximum number of custom classes to return. The service may return fewer than this value. If unspecified, at most 50 custom classes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// A page token, received from a previous <c>ListCustomClass</c> call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to <c>ListCustomClass</c> must match the call that provided the page token.
    /// </summary>
    public string? PageToken { get; init; }
}
