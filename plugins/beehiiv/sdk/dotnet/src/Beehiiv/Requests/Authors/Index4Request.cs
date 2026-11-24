namespace Beehiiv.Requests.Authors;

/// <summary>
/// The inputs of the Index4 operation.
/// </summary>
public sealed record Index4Request
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.
    /// </summary>
    public int? Limit { get; init; }

    /// <summary>
    /// Pagination returns the results in pages. Each page contains the number of results specified by the <c>limit</c> (default: 10).&lt;br&gt;If not specified, results 1-10 from page 1 will be returned.
    /// </summary>
    public int? Page { get; init; }

    /// <summary>
    /// Optionally filter authors by full name or first name (case-insensitive).
    /// </summary>
    public string? Name { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
