using Lusha.Models;

namespace Lusha.Requests.SearchEnrich;

/// <summary>
/// The inputs of the SearchAndEnrichCompanies operation.
/// </summary>
public sealed record SearchAndEnrichCompaniesRequest
{
    public required V3CompaniesSearchAndEnrichRequest Body { get; init; }
}
