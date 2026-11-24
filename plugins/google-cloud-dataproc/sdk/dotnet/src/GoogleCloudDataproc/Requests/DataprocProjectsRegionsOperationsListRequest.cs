namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the DataprocProjectsRegionsOperationsList operation.
/// </summary>
public sealed record DataprocProjectsRegionsOperationsListRequest
{
    /// <summary>
    /// Resource name segment (projectsId).
    /// </summary>
    public required string ProjectsId { get; init; }

    /// <summary>
    /// Resource name segment (regionsId).
    /// </summary>
    public required string RegionsId { get; init; }

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
    /// When set to true, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field.This can only be true when reading across collections. For example, when parent is set to "projects/example/locations/-".This field is not supported by default and will result in an UNIMPLEMENTED error if set unless explicitly documented otherwise in service or product specific documentation.
    /// </summary>
    public bool? ReturnPartialSuccess { get; init; }
}
