using System;
using DoiT.Core.Validation.Attributes;
using DoiT.Models.Enums;

namespace DoiT.Requests.DataHub;

/// <summary>
/// The inputs of the ExportDatahubDatasetRecords operation.
/// </summary>
public sealed record ExportDatahubDatasetRecordsRequest
{
    /// <summary>
    /// The name of the dataset to export.
    /// </summary>
    public required string Name { get; init; }

    /// <summary>
    /// Inclusive lower bound on the event time, RFC3339.
    /// </summary>
    public required DateTimeOffset StartTime { get; init; }

    /// <summary>
    /// Exclusive upper bound on the event time, RFC3339. At most 366 days after the start time.
    /// </summary>
    public required DateTimeOffset EndTime { get; init; }

    /// <summary>
    /// Output format.
    /// </summary>
    public Format Format { get; init; } = Format.Csv;

    /// <summary>
    /// Maximum number of rows in the page.
    /// </summary>
    [Minimum(1)]
    [Maximum(50000)]
    public long MaxResults { get; init; } = 10000L;

    /// <summary>
    /// Page token, returned by a previous call, to request the next page of results
    /// </summary>
    public string? PageToken { get; init; }
}
