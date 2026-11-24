using System.Collections.Generic;

namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the MetastoreProjectsLocationsList operation.
/// </summary>
public sealed record MetastoreProjectsLocationsListRequest
{
    /// <summary>
    /// Resource name segment (projectsId).
    /// </summary>
    public required string ProjectsId { get; init; }

    /// <summary>
    /// Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage.
    /// </summary>
    public IReadOnlyList<string>? ExtraLocationTypes { get; init; }

    /// <summary>
    /// A filter to narrow down results to a preferred subset. The filtering language accepts strings like "displayName=tokyo", and is documented in more detail in AIP-160 (https://google.aip.dev/160).
    /// </summary>
    public string? Filter { get; init; }

    /// <summary>
    /// The maximum number of results to return. If not set, the service selects a default.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// A page token received from the next_page_token field in the response. Send that page token to receive the subsequent page.
    /// </summary>
    public string? PageToken { get; init; }
}
