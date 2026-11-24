namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsHostQueriesList operation.
/// </summary>
public sealed record ApigeeOrganizationsHostQueriesListRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Filter response list by dataset. Example: <c>api</c>, <c>mint</c>
    /// </summary>
    public string? Dataset { get; init; }

    /// <summary>
    /// Required. Filter response list by hostname.
    /// </summary>
    public string? EnvgroupHostname { get; init; }

    /// <summary>
    /// Filter response list by returning asynchronous queries that created after this date time. Time must be in ISO date-time format like '2011-12-03T10:15:30Z'.
    /// </summary>
    public string? From { get; init; }

    /// <summary>
    /// Flag to include asynchronous queries that don't have a report denifition.
    /// </summary>
    public string? InclQueriesWithoutReport { get; init; }

    /// <summary>
    /// Filter response list by asynchronous query status.
    /// </summary>
    public string? Status { get; init; }

    /// <summary>
    /// Filter response list by user who submitted queries.
    /// </summary>
    public string? SubmittedBy { get; init; }

    /// <summary>
    /// Filter response list by returning asynchronous queries that created before this date time. Time must be in ISO date-time format like '2011-12-03T10:16:30Z'.
    /// </summary>
    public string? To { get; init; }
}
