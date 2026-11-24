using Leadspace.Models;

namespace Leadspace.Requests.Enrichment;

/// <summary>
/// The inputs of the EnrichSingleRecord operation.
/// </summary>
public sealed record EnrichSingleRecordRequest
{
    public required SingleEnrichmentRequest Body { get; init; }
}
