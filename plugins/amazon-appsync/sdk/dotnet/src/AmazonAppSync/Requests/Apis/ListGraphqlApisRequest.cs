using AmazonAppSync.Models.Enums;

namespace AmazonAppSync.Requests.Apis;

/// <summary>
/// The inputs of the ListGraphqlApis operation.
/// </summary>
public sealed record ListGraphqlApisRequest
{
    /// <summary>
    /// An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.
    /// </summary>
    public string? NextToken { get; init; }

    /// <summary>
    /// The maximum number of results that you want the request to return.
    /// </summary>
    public int? MaxResults { get; init; }

    /// <summary>
    /// The value that indicates whether the GraphQL API is a standard API (GRAPHQL) or merged API (MERGED).
    /// </summary>
    public ApiType2? ApiType { get; init; }

    /// <summary>
    /// The account owner of the GraphQL API.
    /// </summary>
    public Owner? Owner { get; init; }
}
