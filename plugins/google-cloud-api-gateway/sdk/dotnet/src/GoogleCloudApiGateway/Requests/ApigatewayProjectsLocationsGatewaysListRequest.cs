namespace GoogleCloudApiGateway.Requests;

/// <summary>
/// The inputs of the ApigatewayProjectsLocationsGatewaysList operation.
/// </summary>
public sealed record ApigatewayProjectsLocationsGatewaysListRequest
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
    /// Optional. Filter.
    /// </summary>
    public string? Filter { get; init; }

    /// <summary>
    /// Optional. Order by parameters.
    /// </summary>
    public string? OrderBy { get; init; }

    /// <summary>
    /// Optional. Page size.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. Page token.
    /// </summary>
    public string? PageToken { get; init; }
}
