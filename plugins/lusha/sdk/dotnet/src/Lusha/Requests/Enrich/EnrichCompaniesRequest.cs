using Lusha.Models;

namespace Lusha.Requests.Enrich;

/// <summary>
/// The inputs of the EnrichCompanies operation.
/// </summary>
public sealed record EnrichCompaniesRequest
{
    public required V3CompaniesEnrichRequest Body { get; init; }
}
