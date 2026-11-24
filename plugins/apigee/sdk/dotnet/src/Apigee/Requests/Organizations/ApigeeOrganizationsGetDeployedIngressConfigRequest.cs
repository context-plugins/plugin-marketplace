using Apigee.Models.Enums;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsGetDeployedIngressConfig operation.
/// </summary>
public sealed record ApigeeOrganizationsGetDeployedIngressConfigRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// When set to FULL, additional details about the specific deployments receiving traffic will be included in the IngressConfig response's RoutingRules.
    /// </summary>
    public View? View { get; init; }
}
