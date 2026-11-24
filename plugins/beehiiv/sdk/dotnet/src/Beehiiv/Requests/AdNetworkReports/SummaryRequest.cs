using System;

namespace Beehiiv.Requests.AdNetworkReports;

/// <summary>
/// The inputs of the Summary operation.
/// </summary>
public sealed record SummaryRequest
{
    /// <summary>
    /// The prefixed ID of the publication object.
    /// </summary>
    public required string PublicationId { get; init; }

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
