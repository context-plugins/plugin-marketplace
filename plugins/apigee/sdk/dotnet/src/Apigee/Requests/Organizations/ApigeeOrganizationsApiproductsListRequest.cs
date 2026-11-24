namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsApiproductsList operation.
/// </summary>
public sealed record ApigeeOrganizationsApiproductsListRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Name of the attribute used to filter the search.
    /// </summary>
    public string? Attributename { get; init; }

    /// <summary>
    /// Value of the attribute used to filter the search.
    /// </summary>
    public string? Attributevalue { get; init; }

    /// <summary>
    /// Enter the number of API products you want returned in the API call. The limit is 1000.
    /// </summary>
    public string? Count { get; init; }

    /// <summary>
    /// Flag that specifies whether to expand the results. Set to <c>true</c> to get expanded details about each API.
    /// </summary>
    public bool? Expand { get; init; }

    /// <summary>
    /// Optional. The Space to list API products for. When none provided, all the spaces the user has list access, will be used implicitly, and the same following rules will apply. Can be used in conjunction with start_key, expand and count for paginated response. Composite queries with attributename and attributevalue are not supported yet.
    /// </summary>
    public string? Space { get; init; }

    /// <summary>
    /// Gets a list of API products starting with a specific API product in the list. For example, if you're returning 50 API products at a time (using the <c>count</c> query parameter), you can view products 50-99 by entering the name of the 50th API product in the first API (without using <c>startKey</c>). Product name is case sensitive.
    /// </summary>
    public string? StartKey { get; init; }
}
