namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsDevelopersSubscriptionsList operation.
/// </summary>
public sealed record ApigeeOrganizationsDevelopersSubscriptionsListRequest
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
    /// Number of API product subscriptions to return in the API call. Use with <c>startKey</c> to provide more targeted filtering. Defaults to 100. The maximum limit is 1000.
    /// </summary>
    public int? Count { get; init; }

    /// <summary>
    /// Name of the API product subscription from which to start displaying the list of subscriptions. If omitted, the list starts from the first item. For example, to view the API product subscriptions from 51-150, set the value of <c>startKey</c> to the name of the 51st subscription and set the value of <c>count</c> to 100.
    /// </summary>
    public string? StartKey { get; init; }
}
