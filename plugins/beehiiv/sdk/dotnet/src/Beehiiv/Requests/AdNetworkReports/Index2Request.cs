using System;

namespace Beehiiv.Requests.AdNetworkReports;

/// <summary>
/// The inputs of the Index2 operation.
/// </summary>
public sealed record Index2Request
{
    /// <summary>
    /// The prefixed ID of the publication object.
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// A limit between 1 and 100. Defaults to 10.
    /// </summary>
    public int? Limit { get; init; }

    /// <summary>
    /// The page of reports to return. Defaults to 1.
    /// </summary>
    public int? Page { get; init; }

    /// <summary>
    /// Include reports for advertisements sent on or after this date in <c>YYYY-MM-DD</c> format.
    /// </summary>
    public DateTimeOffset? StartDate { get; init; }

    /// <summary>
    /// Include reports for advertisements sent on or before this date in <c>YYYY-MM-DD</c> format.
    /// </summary>
    public DateTimeOffset? EndDate { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
