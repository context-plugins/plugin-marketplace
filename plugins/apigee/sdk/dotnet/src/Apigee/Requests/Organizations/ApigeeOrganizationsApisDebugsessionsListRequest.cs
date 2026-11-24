namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsApisDebugsessionsList operation.
/// </summary>
public sealed record ApigeeOrganizationsApisDebugsessionsListRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (apisId).
    /// </summary>
    public required string ApisId { get; init; }

    /// <summary>
    /// Optional. Maximum number of debug sessions to return. The page size defaults to 25.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. Page token, returned from a previous ListApiDebugSessions call, that you can use to retrieve the next page.
    /// </summary>
    public string? PageToken { get; init; }
}
