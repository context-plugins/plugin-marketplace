using RocketReach.Core.Validation.Attributes;
using RocketReach.Models;
using RocketReach.Models.Enums;

namespace RocketReach.Requests.CompanyDataApi;

/// <summary>
/// The inputs of the CreateCompanySearch operation.
/// </summary>
public sealed record CreateCompanySearchRequest
{
    /// <summary>
    /// Start index of the request results (counting from 1)
    /// </summary>
    [Minimum(1)]
    [Maximum(10000)]
    public int Start { get; init; } = 1;

    /// <summary>
    /// Maximum number of results to return per page [1-100]
    /// </summary>
    [Minimum(1)]
    [Maximum(100)]
    public int PageSize { get; init; } = 10;

    /// <summary>
    /// Search query object for the request
    /// </summary>
    public CompanyQuery1? Query { get; init; }

    /// <summary>
    /// Specifies the ordering of search results. "popularity" matches the default ordering of the Search web app.
    /// </summary>
    public OrderByEnum OrderBy { get; init; } = OrderByEnum.Relevance;
}
