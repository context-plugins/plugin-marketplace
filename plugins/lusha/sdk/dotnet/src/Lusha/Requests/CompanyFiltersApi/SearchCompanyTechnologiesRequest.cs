using Lusha.Models;

namespace Lusha.Requests.CompanyFiltersApi;

/// <summary>
/// The inputs of the SearchCompanyTechnologies operation.
/// </summary>
public sealed record SearchCompanyTechnologiesRequest
{
    public required TechnologySearchRequest Body { get; init; }
}
