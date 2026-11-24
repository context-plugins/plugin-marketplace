using Surfe.Models;

namespace Surfe.Requests.Companies;

/// <summary>
/// The inputs of the StartCompanyEnrichment operation.
/// </summary>
public sealed record StartCompanyEnrichmentRequest
{
    public required CompanyEnrichmentRequest Body { get; init; }
}
