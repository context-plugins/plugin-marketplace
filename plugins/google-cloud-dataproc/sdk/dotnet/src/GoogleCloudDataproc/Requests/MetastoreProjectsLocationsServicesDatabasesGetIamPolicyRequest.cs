namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the MetastoreProjectsLocationsServicesDatabasesGetIamPolicy operation.
/// </summary>
public sealed record MetastoreProjectsLocationsServicesDatabasesGetIamPolicyRequest
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
    /// Resource name segment (servicesId).
    /// </summary>
    public required string ServicesId { get; init; }

    /// <summary>
    /// Resource name segment (databasesId).
    /// </summary>
    public required string DatabasesId { get; init; }

    /// <summary>
    /// Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).
    /// </summary>
    public int? OptionsRequestedPolicyVersion { get; init; }
}
