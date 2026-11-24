namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvironmentsSecurityReportsList operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvironmentsSecurityReportsListRequest
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
    /// Filter response list by dataset. Example: <c>api</c>, <c>mint</c>
    /// </summary>
    public string? Dataset { get; init; }

    /// <summary>
    /// Filter response list by returning security reports that created after this date time. Time must be in ISO date-time format like '2011-12-03T10:15:30Z'.
    /// </summary>
    public string? From { get; init; }

    /// <summary>
    /// The maximum number of security report to return in the list response.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Token returned from the previous list response to fetch the next page.
    /// </summary>
    public string? PageToken { get; init; }

    /// <summary>
    /// Filter response list by security reports status.
    /// </summary>
    public string? Status { get; init; }

    /// <summary>
    /// Filter response list by user who submitted queries.
    /// </summary>
    public string? SubmittedBy { get; init; }

    /// <summary>
    /// Filter response list by returning security reports that created before this date time. Time must be in ISO date-time format like '2011-12-03T10:16:30Z'.
    /// </summary>
    public string? To { get; init; }
}
