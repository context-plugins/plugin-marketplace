namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrl operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlRequest
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
    /// Resource name segment (archiveDeploymentsId).
    /// </summary>
    public required string ArchiveDeploymentsId { get; init; }

    public required object Body { get; init; }
}
