namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsDevelopersSubscriptionsGet operation.
/// </summary>
public sealed record ApigeeOrganizationsDevelopersSubscriptionsGetRequest
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
}
