using Apigee.Models.Enums;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvgroupsGetDeployedIngressConfig operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvgroupsGetDeployedIngressConfigRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (envgroupsId).
    /// </summary>
    public required string EnvgroupsId { get; init; }

    /// <summary>
    /// When set to FULL, additional details about the specific deployments receiving traffic will be included in the IngressConfig response's RoutingRules.
    /// </summary>
    public View? View { get; init; }
}
