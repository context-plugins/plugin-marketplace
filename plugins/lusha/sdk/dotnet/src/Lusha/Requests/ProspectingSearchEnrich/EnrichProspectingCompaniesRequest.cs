using Lusha.Models;

namespace Lusha.Requests.ProspectingSearchEnrich;

/// <summary>
/// The inputs of the EnrichProspectingCompanies operation.
/// </summary>
public sealed record EnrichProspectingCompaniesRequest
{
    public required CompanyEnrichRequest Body { get; init; }
}
