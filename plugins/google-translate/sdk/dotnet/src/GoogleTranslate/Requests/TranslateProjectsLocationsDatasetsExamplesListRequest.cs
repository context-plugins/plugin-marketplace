namespace GoogleTranslate.Requests;

/// <summary>
/// The inputs of the TranslateProjectsLocationsDatasetsExamplesList operation.
/// </summary>
public sealed record TranslateProjectsLocationsDatasetsExamplesListRequest
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
    /// Resource name segment (datasetsId).
    /// </summary>
    public required string DatasetsId { get; init; }

    /// <summary>
    /// Optional. An expression for filtering the examples that will be returned. Example filter: * <c>usage=TRAIN</c>
    /// </summary>
    public string? Filter { get; init; }

    /// <summary>
    /// Optional. Requested page size. The server can return fewer results than requested.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. A token identifying a page of results for the server to return. Typically obtained from next_page_token field in the response of a ListExamples call.
    /// </summary>
    public string? PageToken { get; init; }
}
