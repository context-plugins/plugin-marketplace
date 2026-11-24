namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteData operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataRequest
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
    /// Resource name segment (debugsessionsId).
    /// </summary>
    public required string DebugsessionsId { get; init; }
}
