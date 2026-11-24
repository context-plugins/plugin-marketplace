namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvironmentsApisRevisionsUndeploy operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvironmentsApisRevisionsUndeployRequest
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
    /// Flag that specifies whether to enable sequenced rollout. If set to <c>true</c>, the environment group routing rules corresponding to this deployment will be removed before removing the deployment from the runtime. This is likely to be a rare use case; it is only needed when the intended effect of undeploying this proxy is to cause the traffic it currently handles to be rerouted to some other existing proxy in the environment group. The GenerateUndeployChangeReport API may be used to examine routing changes before issuing the undeployment request, and its response will indicate if a sequenced rollout is recommended for the undeployment.
    /// </summary>
    public bool? SequencedRollout { get; init; }
}
