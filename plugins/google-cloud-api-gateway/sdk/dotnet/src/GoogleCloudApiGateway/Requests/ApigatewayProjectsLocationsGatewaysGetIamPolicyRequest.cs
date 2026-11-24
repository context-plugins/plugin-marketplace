namespace GoogleCloudApiGateway.Requests;

/// <summary>
/// The inputs of the ApigatewayProjectsLocationsGatewaysGetIamPolicy operation.
/// </summary>
public sealed record ApigatewayProjectsLocationsGatewaysGetIamPolicyRequest
{
    /// <summary>
    /// Resource name segment (projectsId).
    /// </summary>
    public required string ProjectsId { get; init; }

    /// <summary>
    /// Resource name segment (locationsId).
    /// </summary>
    public required string LocationsId { get; init; }

    /// <summary>
    /// Resource name segment (gatewaysId).
    /// </summary>
    public required string GatewaysId { get; init; }

    /// <summary>
    /// Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the <see href="https://cloud.google.com/iam/help/conditions/resource-policies">IAM documentation</see>.
    /// </summary>
    public int? OptionsRequestedPolicyVersion { get; init; }
}
