namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsAnalyticsDatastoresList operation.
/// </summary>
public sealed record ApigeeOrganizationsAnalyticsDatastoresListRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Optional. TargetType is used to fetch all Datastores that match the type
    /// </summary>
    public string? TargetType { get; init; }
}
