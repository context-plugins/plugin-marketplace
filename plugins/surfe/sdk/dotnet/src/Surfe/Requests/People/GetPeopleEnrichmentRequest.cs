using System;

namespace Surfe.Requests.People;

/// <summary>
/// The inputs of the GetPeopleEnrichment operation.
/// </summary>
public sealed record GetPeopleEnrichmentRequest
{
    /// <summary>
    /// The enrichment job ID returned by the start operation.
    /// </summary>
    public required Guid Id { get; init; }
}
