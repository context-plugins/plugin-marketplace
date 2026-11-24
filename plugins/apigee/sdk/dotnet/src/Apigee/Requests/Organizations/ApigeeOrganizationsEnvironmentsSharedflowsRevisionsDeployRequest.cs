namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeploy operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployRequest
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
    /// Resource name segment (sharedflowsId).
    /// </summary>
    public required string SharedflowsId { get; init; }

    /// <summary>
    /// Resource name segment (revisionsId).
    /// </summary>
    public required string RevisionsId { get; init; }

    /// <summary>
    /// Flag that specifies whether the new deployment replaces other deployed revisions of the shared flow in the environment. Set <c>override</c> to <c>true</c> to replace other deployed revisions. By default, <c>override</c> is <c>false</c> and the deployment is rejected if other revisions of the shared flow are deployed in the environment.
    /// </summary>
    public bool? Override { get; init; }

    /// <summary>
    /// Google Cloud IAM service account. The service account represents the identity of the deployed proxy, and determines what permissions it has. The format must be <c>{ACCOUNT_ID}@{PROJECT}.iam.gserviceaccount.com</c>.
    /// </summary>
    public string? ServiceAccount { get; init; }
}
