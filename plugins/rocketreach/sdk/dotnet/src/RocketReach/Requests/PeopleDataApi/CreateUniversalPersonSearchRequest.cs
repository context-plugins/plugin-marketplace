using RocketReach.Core.Validation.Attributes;
using RocketReach.Models;
using RocketReach.Models.Enums;

namespace RocketReach.Requests.PeopleDataApi;

/// <summary>
/// The inputs of the CreateUniversalPersonSearch operation.
/// </summary>
public sealed record CreateUniversalPersonSearchRequest
{
    /// <summary>
    /// Paginate through search results by returning results starting from this value (counting from 1).
    /// </summary>
    [Minimum(1)]
    [Maximum(10000)]
    public int Start { get; init; } = 1;

    /// <summary>
    /// Maximum number of search results to return per page.
    /// </summary>
    [Minimum(1)]
    [Maximum(100)]
    public int PageSize { get; init; } = 100;

    public PersonQuery? Query { get; init; }

    /// <summary>
    /// Specifies the ordering of search results. "popularity" matches the default ordering of the Search web app.
    /// <list type="bullet">
    ///   <item><description><c>relevance</c> - relevance</description></item>
    ///   <item><description><c>popularity</c> - popularity</description></item>
    ///   <item><description><c>score</c> - score</description></item>
    /// </list>
    /// </summary>
    public OrderByEnum OrderBy { get; init; } = OrderByEnum.Relevance;
}
