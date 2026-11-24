namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsList operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsListRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (environmentsId).
    /// </summary>
    public required string EnvironmentsId { get; init; }

    /// <summary>
    /// Resource name segment (apisId).
    /// </summary>
    public required string ApisId { get; init; }

    /// <summary>
    /// Resource name segment (revisionsId).
    /// </summary>
    public required string RevisionsId { get; init; }

    /// <summary>
    /// Optional. Maximum number of debug sessions to return. The page size defaults to 25.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. Page token, returned from a previous ListDebugSessions call, that you can use to retrieve the next page.
    /// </summary>
    public string? PageToken { get; init; }
}
