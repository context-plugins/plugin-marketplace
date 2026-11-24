namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsDevelopersList operation.
/// </summary>
public sealed record ApigeeOrganizationsDevelopersListRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Optional. List only Developers that are associated with the app. Note that start_key, count are not applicable for this filter criteria.
    /// </summary>
    public string? App { get; init; }

    /// <summary>
    /// Optional. Number of developers to return in the API call. Use with the <c>startKey</c> parameter to provide more targeted filtering. The limit is 1000.
    /// </summary>
    public string? Count { get; init; }

    /// <summary>
    /// Specifies whether to expand the results. Set to <c>true</c> to expand the results. This query parameter is not valid if you use the <c>count</c> or <c>startKey</c> query parameters.
    /// </summary>
    public bool? Expand { get; init; }

    /// <summary>
    /// Optional. List of IDs to include, separated by commas.
    /// </summary>
    public string? Ids { get; init; }

    /// <summary>
    /// Flag that specifies whether to include company details in the response.
    /// </summary>
    public bool? IncludeCompany { get; init; }

    /// <summary>
    /// <b>Note</b>: Must be used in conjunction with the <c>count</c> parameter. Email address of the developer from which to start displaying the list of developers. For example, if the an unfiltered list returns: ``` westley@example.com fezzik@example.com buttercup@example.com ``` and your `startKey` is `fezzik@example.com`, the list returned will be ``` fezzik@example.com buttercup@example.com ```
    /// </summary>
    public string? StartKey { get; init; }
}
