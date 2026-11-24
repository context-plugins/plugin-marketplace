namespace GoogleCloudDatastream.Requests;

/// <summary>
/// The inputs of the DatastreamProjectsLocationsOperationsList operation.
/// </summary>
public sealed record DatastreamProjectsLocationsOperationsListRequest
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
    /// The standard list filter.
    /// </summary>
    public string? Filter { get; init; }

    /// <summary>
    /// The standard list page size.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// The standard list page token.
    /// </summary>
    public string? PageToken { get; init; }

    /// <summary>
    /// When set to <c>true</c>, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be <c>true</c> when reading across collections. For example, when <c>parent</c> is set to <c>"projects/example/locations/-"</c>. This field is not supported by default and will result in an <c>UNIMPLEMENTED</c> error if set unless explicitly documented otherwise in service or product specific documentation.
    /// </summary>
    public bool? ReturnPartialSuccess { get; init; }
}
