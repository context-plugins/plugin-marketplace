using Beehiiv.Models.Enums;

namespace Beehiiv.Requests.Tiers;

/// <summary>
/// The inputs of the Index21 operation.
/// </summary>
public sealed record Index21Request
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// Optional list of expandable objects.&lt;br&gt;<c>stats</c> - Returns statistics about the tier(s).&lt;br&gt;<c>prices</c> - Returns prices for the tier(s).
    /// </summary>
    public string? Expand { get; init; }

    /// <summary>
    /// A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.
    /// </summary>
    public int? Limit { get; init; }

    /// <summary>
    /// Pagination returns the results in pages. Each page contains the number of results specified by the <c>limit</c> (default: 10).&lt;br&gt;If not specified, results 1-10 from page 1 will be returned.
    /// </summary>
    public int? Page { get; init; }

    /// <summary>
    /// The direction that the results are sorted in. Defaults to asc&lt;br&gt; <c>asc</c> - Ascending, sorts from smallest to largest.&lt;br&gt; <c>desc</c> - Descending, sorts from largest to smallest.
    /// </summary>
    public RequestDirection Direction { get; init; } = RequestDirection.Asc;

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
