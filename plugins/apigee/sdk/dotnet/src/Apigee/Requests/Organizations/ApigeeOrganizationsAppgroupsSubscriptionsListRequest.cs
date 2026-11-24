namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsAppgroupsSubscriptionsList operation.
/// </summary>
public sealed record ApigeeOrganizationsAppgroupsSubscriptionsListRequest
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
    /// Optional. The maximum number of subscriptions to return. The service may return fewer than this value. If unspecified, at most 100 subscriptions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. A page token, received from a previous <c>ListAppGroupSubscriptions</c> call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to <c>ListAppGroupSubscriptions</c> must match the call that provided the page token.
    /// </summary>
    public string? PageToken { get; init; }
}
