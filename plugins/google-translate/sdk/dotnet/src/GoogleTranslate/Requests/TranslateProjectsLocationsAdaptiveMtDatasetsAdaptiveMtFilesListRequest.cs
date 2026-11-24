namespace GoogleTranslate.Requests;

/// <summary>
/// The inputs of the TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesList operation.
/// </summary>
public sealed record TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesListRequest
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
    /// Resource name segment (adaptiveMtDatasetsId).
    /// </summary>
    public required string AdaptiveMtDatasetsId { get; init; }

    /// <summary>
    /// Optional.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. A token identifying a page of results the server should return. Typically, this is the value of ListAdaptiveMtFilesResponse.next_page_token returned from the previous call to <c>ListAdaptiveMtFiles</c> method. The first page is returned if <c>page_token</c>is empty or missing.
    /// </summary>
    public string? PageToken { get; init; }
}
