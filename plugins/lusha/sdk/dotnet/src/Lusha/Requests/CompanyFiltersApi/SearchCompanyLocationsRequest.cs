using Lusha.Models;

namespace Lusha.Requests.CompanyFiltersApi;

/// <summary>
/// The inputs of the SearchCompanyLocations operation.
/// </summary>
public sealed record SearchCompanyLocationsRequest
{
    public required LocationSearchRequest Body { get; init; }
}
