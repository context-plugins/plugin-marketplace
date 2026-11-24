using Lusha.Models;

namespace Lusha.Requests.CompanyFiltersApi;

/// <summary>
/// The inputs of the SearchCompanyNames operation.
/// </summary>
public sealed record SearchCompanyNamesRequest
{
    public required CompanyNameSearchRequest Body { get; init; }
}
