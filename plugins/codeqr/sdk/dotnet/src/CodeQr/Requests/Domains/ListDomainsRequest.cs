using CodeQr.Core.Validation.Attributes;

namespace CodeQr.Requests.Domains;

/// <summary>
/// The inputs of the ListDomains operation.
/// </summary>
public sealed record ListDomainsRequest
{
    /// <summary>
    /// Whether to include archived domains in the response. Defaults to <c>false</c> if not provided.
    /// </summary>
    public bool Archived { get; init; } = false;

    /// <summary>
    /// The search term to filter the domains by.
    /// </summary>
    public string? Search { get; init; }

    /// <summary>
    /// The page number for pagination.
    /// </summary>
    [ExclusiveMinimum(0)]
    public double Page { get; init; } = 1d;

    /// <summary>
    /// The number of items per page.
    /// </summary>
    [Maximum(50.0)]
    [ExclusiveMinimum(0)]
    public double PageSize { get; init; } = 50d;
}
