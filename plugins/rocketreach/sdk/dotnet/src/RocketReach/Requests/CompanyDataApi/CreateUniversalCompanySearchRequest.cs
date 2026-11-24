using RocketReach.Core.Validation.Attributes;
using RocketReach.Models;
using RocketReach.Models.Enums;

namespace RocketReach.Requests.CompanyDataApi;

/// <summary>
/// The inputs of the CreateUniversalCompanySearch operation.
/// </summary>
public sealed record CreateUniversalCompanySearchRequest
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

    public CompanyQuery? Query { get; init; }

    public OrderByEnum OrderBy { get; init; } = OrderByEnum.Relevance;
}
