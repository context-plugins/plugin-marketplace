namespace Apigee.Requests.Projects;

/// <summary>
/// The inputs of the ApihubProjectsLocationsAddonsList operation.
/// </summary>
public sealed record ApihubProjectsLocationsAddonsListRequest
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
    /// Optional. An expression that filters the list of addons. The only supported filter is <c>plugin_instance_name</c>. It can be used to filter addons that are enabled for a given plugin instance. The format of the filter is <c>plugin_instance_name = "projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}"</c>.
    /// </summary>
    public string? Filter { get; init; }

    /// <summary>
    /// Optional. The maximum number of hub addons to return. The service may return fewer than this value. If unspecified, at most 50 hub addons will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. A page token, received from a previous <c>ListAddons</c> call. Provide this to retrieve the subsequent page. When paginating, all other parameters (except page_size) provided to <c>ListAddons</c> must match the call that provided the page token.
    /// </summary>
    public string? PageToken { get; init; }
}
