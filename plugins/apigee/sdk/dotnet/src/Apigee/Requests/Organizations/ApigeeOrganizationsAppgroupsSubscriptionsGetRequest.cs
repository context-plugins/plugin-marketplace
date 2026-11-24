namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsAppgroupsSubscriptionsGet operation.
/// </summary>
public sealed record ApigeeOrganizationsAppgroupsSubscriptionsGetRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (appgroupsId).
    /// </summary>
    public required string AppgroupsId { get; init; }

    /// <summary>
    /// Resource name segment (subscriptionsId).
    /// </summary>
    public required string SubscriptionsId { get; init; }
}
