using System;
using DoiT.Core.Models;

namespace DoiT.Requests.DataHub;

/// <summary>
/// The inputs of the DatahubEventsCsvFile operation.
/// </summary>
public sealed record DatahubEventsCsvFileRequest
{
    /// <summary>
    /// The identifier of the data provider. Allowed characters: alphanumeric (0-9,a-z,A-Z), underscore (_), space, dash (-).
    /// </summary>
    public string? Provider { get; init; }

    /// <summary>
    /// The CSV file to upload, either uncompressed or compressed in ZIP or GZ format. The maximum file size is 30 MB.
    /// </summary>
    public BinaryContent? File { get; init; }

    /// <summary>
    /// Versioned schema template of the file. Defaults to the dataset's template (<c>default@1</c> for datasets created without one). Provider-native templates such as <c>anthropic-spend-report@1</c> and <c>codex-usage-report@1</c> validate the vendor's own columns and normalize them into DataHub events. Must match the template stored on the dataset.
    /// </summary>
    public string? SchemaTemplate { get; init; }

    /// <summary>
    /// Inclusive first day of the report period (YYYY-MM-DD). Required for template uploads whose filename does not carry the period; when both are present they must agree.
    /// </summary>
    public DateTimeOffset? PeriodStart { get; init; }

    /// <summary>
    /// Inclusive last day of the report period (YYYY-MM-DD). Events are booked on this day.
    /// </summary>
    public DateTimeOffset? PeriodEnd { get; init; }

    /// <summary>
    /// Template uploads only. When <c>true</c>, active batches whose report period overlaps this upload are soft-deleted before the new file is ingested, and their ids are returned in <c>replacedBatches</c>. Refused with <c>409</c> when an overlapping batch extends outside the requested period (so a one-day replacement can never remove a wider upload) or was ingested less than 90 minutes ago (<c>Retry-After</c> header set). Without <c>replace</c>, any overlap is rejected with <c>409</c>.
    /// </summary>
    public bool Replace { get; init; } = false;
}
