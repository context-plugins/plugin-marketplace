namespace GoogleTranslate.Requests;

/// <summary>
/// The inputs of the TranslateProjectsLocationsModelsList operation.
/// </summary>
public sealed record TranslateProjectsLocationsModelsListRequest
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
    /// Optional. An expression for filtering the models that will be returned. Supported filter: <c>dataset_id=${dataset_id}</c>
    /// </summary>
    public string? Filter { get; init; }

    /// <summary>
    /// Optional. Requested page size. The server can return fewer results than requested.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. A token identifying a page of results for the server to return. Typically obtained from next_page_token field in the response of a ListModels call.
    /// </summary>
    public string? PageToken { get; init; }
}
