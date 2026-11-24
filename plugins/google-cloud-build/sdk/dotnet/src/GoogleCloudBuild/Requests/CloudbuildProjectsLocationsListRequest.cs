using System.Collections.Generic;

namespace GoogleCloudBuild.Requests;

/// <summary>
/// The inputs of the CloudbuildProjectsLocationsList operation.
/// </summary>
public sealed record CloudbuildProjectsLocationsListRequest
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
    /// A filter to narrow down results to a preferred subset. The filtering language accepts strings like <c>"displayName=tokyo"</c>, and is documented in more detail in <see href="https://google.aip.dev/160">AIP-160</see>.
    /// </summary>
    public string? Filter { get; init; }

    /// <summary>
    /// The maximum number of results to return. If not set, the service selects a default.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// A page token received from the <c>next_page_token</c> field in the response. Send that page token to receive the subsequent page.
    /// </summary>
    public string? PageToken { get; init; }
}
