namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvironmentsQueriesGetResult operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvironmentsQueriesGetResultRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (environmentsId).
    /// </summary>
    public required string EnvironmentsId { get; init; }

    /// <summary>
    /// Resource name segment (queriesId).
    /// </summary>
    public required string QueriesId { get; init; }
}
