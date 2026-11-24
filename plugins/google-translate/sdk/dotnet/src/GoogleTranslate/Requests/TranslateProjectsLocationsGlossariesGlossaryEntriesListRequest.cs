namespace GoogleTranslate.Requests;

/// <summary>
/// The inputs of the TranslateProjectsLocationsGlossariesGlossaryEntriesList operation.
/// </summary>
public sealed record TranslateProjectsLocationsGlossariesGlossaryEntriesListRequest
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
    /// Resource name segment (glossariesId).
    /// </summary>
    public required string GlossariesId { get; init; }

    /// <summary>
    /// Optional. Requested page size. The server may return fewer glossary entries than requested. If unspecified, the server picks an appropriate default.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. A token identifying a page of results the server should return. Typically, this is the value of [ListGlossaryEntriesResponse.next_page_token] returned from the previous call. The first page is returned if <c>page_token</c>is empty or missing.
    /// </summary>
    public string? PageToken { get; init; }
}
