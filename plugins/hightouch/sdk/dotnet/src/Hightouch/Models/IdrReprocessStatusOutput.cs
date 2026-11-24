using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hightouch.Models.Enums;

namespace Hightouch.Models;

public record IdrReprocessStatusOutput
{
    /// <summary>
    /// "queueing": The identifiers are being queued for reprocessing.
    /// "queued": The identifiers have been queued and added to the blocklist. Their associated clusters will be reprocessed next time the graph runs.
    /// "reprocessed": The identifiers' clusters have been reprocessed during a run.
    /// "failed": We failed to queue the identifiers for reprocessing.
    /// "cancelled": The reprocessing request has been cancelled.
    /// </summary>
    [JsonPropertyName("status")]
    public required Status1 Status { get; init; }

    /// <summary>
    /// Set if the status is "queued" or "reprocessed". The timestamp when the identifiers were queued for reprocessing.
    /// </summary>
    [JsonPropertyName("queuedAt")]
    public required DateTimeOffset? QueuedAt { get; init; }

    /// <summary>
    /// Set if the status is "reprocessed". The timestamp when the identifiers' clusters were reprocessed.
    /// </summary>
    [JsonPropertyName("reprocessedAt")]
    public required DateTimeOffset? ReprocessedAt { get; init; }

    /// <summary>
    /// Set if the status is "reprocessed". The ID of the run that reprocessed the identifiers' clusters.
    /// </summary>
    [JsonPropertyName("reprocessedRunId")]
    public required string? ReprocessedRunId { get; init; }

    /// <summary>
    /// One result per identifier, in the order they were submitted.
    /// True if the identifier was found in the graph at the start of the run that processed the request.
    /// Null until the request is processed, and on requests submitted before this field existed on the API.
    /// </summary>
    [JsonPropertyName("recordFound")]
    public required IReadOnlyList<bool>? RecordFound { get; init; }

    /// <summary>
    /// If available, the error message from failing to queue the identifiers for reprocessing.
    /// </summary>
    [JsonPropertyName("error")]
    public required string? Error { get; init; }
}
