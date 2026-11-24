using System;

namespace Surfe.Requests.Companies;

/// <summary>
/// The inputs of the GetCompanyEnrichment operation.
/// </summary>
public sealed record GetCompanyEnrichmentRequest
{
    /// <summary>
    /// The enrichment job ID returned by the start operation.
    /// </summary>
    public required Guid Id { get; init; }
}
