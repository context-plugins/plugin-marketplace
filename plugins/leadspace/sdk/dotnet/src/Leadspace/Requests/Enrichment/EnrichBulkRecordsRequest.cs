using Leadspace.Models;

namespace Leadspace.Requests.Enrichment;

/// <summary>
/// The inputs of the EnrichBulkRecords operation.
/// </summary>
public sealed record EnrichBulkRecordsRequest
{
    public required BulkEnrichmentRequest Body { get; init; }
}
