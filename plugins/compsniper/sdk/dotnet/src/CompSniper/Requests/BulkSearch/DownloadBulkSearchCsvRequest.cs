using System;
using CompSniper.Core.Validation.Attributes;

namespace CompSniper.Requests.BulkSearch;

/// <summary>
/// The inputs of the DownloadBulkSearchCsv operation.
/// </summary>
public sealed record DownloadBulkSearchCsvRequest
{
    public required Guid RunId { get; init; }

    /// <summary>
    /// Original zero-based keyword index. Omit for a combined CSV.
    /// </summary>
    [Minimum(0)]
    public int? Index { get; init; }
}
