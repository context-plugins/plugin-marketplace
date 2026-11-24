using Lusha.Models;

namespace Lusha.Requests.ProspectingSearchEnrich;

/// <summary>
/// The inputs of the SearchProspectingCompanies operation.
/// </summary>
public sealed record SearchProspectingCompaniesRequest
{
    public required CompanySearchRequest Body { get; init; }
}
