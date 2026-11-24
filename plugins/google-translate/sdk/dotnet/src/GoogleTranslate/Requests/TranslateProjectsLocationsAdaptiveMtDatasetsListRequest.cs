namespace GoogleTranslate.Requests;

/// <summary>
/// The inputs of the TranslateProjectsLocationsAdaptiveMtDatasetsList operation.
/// </summary>
public sealed record TranslateProjectsLocationsAdaptiveMtDatasetsListRequest
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
    /// Optional. An expression for filtering the results of the request. Filter is not supported yet.
    /// </summary>
    public string? Filter { get; init; }

    /// <summary>
    /// Optional. Requested page size. The server may return fewer results than requested. If unspecified, the server picks an appropriate default.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. A token identifying a page of results the server should return. Typically, this is the value of ListAdaptiveMtDatasetsResponse.next_page_token returned from the previous call to <c>ListAdaptiveMtDatasets</c> method. The first page is returned if <c>page_token</c>is empty or missing.
    /// </summary>
    public string? PageToken { get; init; }
}
