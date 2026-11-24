namespace Apigee.Requests.Projects;

/// <summary>
/// The inputs of the ApihubProjectsLocationsGeneratedSpecApisList operation.
/// </summary>
public sealed record ApihubProjectsLocationsGeneratedSpecApisListRequest
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
    /// Optional. An AIP-160 filter. This release supports the fields <c>state</c> and <c>source.source_type</c>, the <c>=</c> comparison operator only, and <c>AND</c> conjunction only. Examples: - <c>state = "SPEC_GENERATED"</c> - <c>state = "SPEC_ASSOCIATED" AND source.source_type = APIGEE_X</c>
    /// </summary>
    public string? Filter { get; init; }

    /// <summary>
    /// Optional. The maximum number of results to return. The service may return fewer. If unspecified, at most 50 will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. A page token, received from a previous <c>ListGeneratedSpecApis</c> call. Provide this to retrieve the subsequent page. When paginating, all other parameters (except <c>page_size</c>) provided to <c>ListGeneratedSpecApis</c> must match the call that provided the page token.
    /// </summary>
    public string? PageToken { get; init; }
}
