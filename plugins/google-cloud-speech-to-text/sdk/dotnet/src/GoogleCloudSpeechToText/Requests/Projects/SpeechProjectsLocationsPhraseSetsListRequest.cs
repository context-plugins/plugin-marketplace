namespace GoogleCloudSpeechToText.Requests.Projects;

/// <summary>
/// The inputs of the SpeechProjectsLocationsPhraseSetsList operation.
/// </summary>
public sealed record SpeechProjectsLocationsPhraseSetsListRequest
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
    /// The maximum number of phrase sets to return. The service may return fewer than this value. If unspecified, at most 50 phrase sets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// A page token, received from a previous <c>ListPhraseSet</c> call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to <c>ListPhraseSet</c> must match the call that provided the page token.
    /// </summary>
    public string? PageToken { get; init; }
}
