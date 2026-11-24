namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsDevelopersSubscriptionsExpire operation.
/// </summary>
public sealed record ApigeeOrganizationsDevelopersSubscriptionsExpireRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (developersId).
    /// </summary>
    public required string DevelopersId { get; init; }

    /// <summary>
    /// Resource name segment (subscriptionsId).
    /// </summary>
    public required string SubscriptionsId { get; init; }

    public required object Body { get; init; }
}
