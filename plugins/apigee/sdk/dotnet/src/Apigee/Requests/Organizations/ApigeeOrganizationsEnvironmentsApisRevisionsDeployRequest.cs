namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvironmentsApisRevisionsDeploy operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvironmentsApisRevisionsDeployRequest
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
    /// Flag that specifies whether the new deployment replaces other deployed revisions of the API proxy in the environment. Set <c>override</c> to <c>true</c> to replace other deployed revisions. By default, <c>override</c> is <c>false</c> and the deployment is rejected if other revisions of the API proxy are deployed in the environment.
    /// </summary>
    public bool? Override { get; init; }

    /// <summary>
    /// Flag that specifies whether to enable sequenced rollout. If set to <c>true</c>, the routing rules for this deployment and the environment changes to add the deployment will be rolled out in a safe order. This reduces the risk of downtime that could be caused by changing the environment group's routing before the new destination for the affected traffic is ready to receive it. This should only be necessary if the new deployment will be capturing traffic from another environment under a shared environment group or if traffic will be rerouted to a different environment due to a base path removal. The generateDeployChangeReport API may be used to examine routing changes before issuing the deployment request, and its response will indicate if a sequenced rollout is recommended for the deployment.
    /// </summary>
    public bool? SequencedRollout { get; init; }

    /// <summary>
    /// Google Cloud IAM service account. The service account represents the identity of the deployed proxy, and determines what permissions it has. The format must be <c>{ACCOUNT_ID}@{PROJECT}.iam.gserviceaccount.com</c>.
    /// </summary>
    public string? ServiceAccount { get; init; }
}
